'use strict'

const uuid = require('uuid');
const dynamodb = require('./dynamodb');
const Joi = require('joi');
const Boom = require('boom');

module.exports.list = (event, context, callback) =>{
  const data = {
    id: event.pathParameters.id,
    consultantRole: event.pathParameters.consultantRole,
  };

  const schema = Joi.object().keys({
    id: Joi.string().required(),
    consultantRole: Joi.string().required()
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
      Limit: 10, 
      FilterExpression: '#attribute_name = :value', 
      ExpressionAttributeNames: { 
        '#attribute_name': 'role'
      },
      ExpressionAttributeValues: { 
      ':value': data.consultantRole
      },
    };
    // fetch from db
    return new Promise((resolve, reject)=>{
      dynamodb.scan(params, (error, result) => {
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


  validate(data, schema).then((result)=>{
    return handler(result);
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
    callback(null, {
      headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*",'Access-Control-Allow-Credentials':"true" },
      ...err
    });
  })


}
