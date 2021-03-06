'use strict';

const dynamodb = require('../dynamodb');
const Joi = require('joi');
const Boom = require('boom');

module.exports.update = (event, context, callback) => {
  const data = JSON.parse(event.body);
  const timestamp = new Date().getTime();

  const schema = Joi.object().keys({
    id:Joi.string().required(),
    firstName:Joi.string().required(),
    lastName: Joi.string().required(),
    address: Joi.string().required(),
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

  function handler(data) {

    const params = {
      TableName: process.env.USER_TABLE,
      Key: {
        id: data.id,
      },
      ExpressionAttributeValues: {
        ':updatedAt': timestamp,
        ':firstName': data.firstName,
        ':lastName': data.lastName,
        ':address':data.address
      },

      UpdateExpression: 'SET firstName=:firstName,lastName=:lastName,address=:address,updatedAt= :updatedAt',
      ReturnValues: 'ALL_NEW',
    };

    // write the todo to the database
    return new Promise((resolve, reject)=>{
      dynamodb.update(params, (error,data) => {
        // handle potential errors
        if (error) {
          console.error(error);
          reject(error);
        }
        else {
          resolve(data)
        }
      });
    });
  }

  validate(data, schema).then((result)=>{
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
