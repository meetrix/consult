'use strict';
const dynamodb = require('./dynamodb');
const Joi = require('joi');
const Boom = require('boom');



module.exports.get = (event, context, callback) => {

  const data = {
    id: event.queryStringParameters.id
  };

  const schema = Joi.object().keys({
    id: Joi.string().required()
  });

  function validate  (data, schema) {
    return new Promise((resolve, reject)=>{
      Joi.validate(data, schema, function (err) {
        if(err){
          reject(Boom.badRequest(JSON.stringify(err.details)).output.payload)
        }
        else{
          resolve(data)
        }
      })
    });
  }


  function handler(validData) {
    let currentDate = new Date().toISOString();
    const params = {
      TableName: process.env.USER_EVENT_MAPPER_TABLE,
      KeyConditionExpression: 'id = :value AND #eventStartDate >= :date', // a string representing a constraint on the attribute
      // a string representing a constraint on the attribute
      ExpressionAttributeNames: { // a map of substitutions for attribute names with special characters
        '#eventStartDate': 'date'
      },
      ExpressionAttributeValues: { // a map of substitutions for all attribute values
        ':value': validData.id,
        ':date': currentDate
      },
      ScanIndexForward: true, // optional (true | false) defines direction of Query in the index
      Limit: 1, // optional (limit the number of items to evaluate)
      ConsistentRead: false,
    };
    // fetch from db
    return new Promise((resolve, reject)=>{
      dynamodb.query(params, (error, result) => {
        // handle potential errors
        if (error) {
          console.error(error);
          reject(error);
        }
        else {
          resolve(result)
        }
      });
    });
  }

  validate(data,schema).then((result)=>{
    return handler(result)
  }).then((result)=>{
    // create a response
    const response = {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*",'Access-Control-Allow-Credentials':"true" },
      body: JSON.stringify(result)
    };
    callback(null, response);
  }).
  catch((err)=>{
    console.error('Validation Failed');
    callback(null, {
      headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*",'Access-Control-Allow-Credentials':"true" },
      body: JSON.stringify(err)
    });
  })


};
