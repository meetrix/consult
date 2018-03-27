'use strict';

const dynamodb = require('./dynamodb');
const Joi = require('joi');
const Boom = require('boom');

module.exports.delete = (event, context, callback) => {
  const data = JSON.parse(event.body);

  const schema = Joi.object().keys({
    id:Joi.string().required(),
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
      TableName: process.env.EVENT_TABLE,
      Key: {
        id: data.id,
      }
    };

    // write the todo to the database
    return new Promise((resolve, reject)=>{
      dynamodb.delete(params, (error) => {
        // handle potential errors
        if (error) {
          console.error(error);
          reject(error);
        }
        else {
          resolve(params);
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
