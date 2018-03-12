'use strict';

const dynamodb = require('./dynamodb');
const Joi = require('joi');
const Boom = require('boom');

module.exports.get = (event, context, callback) => {

  const data = {
    id: event.pathParameters.id
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

  function handler(data) {

    const params = {
      TableName: process.env.DYNAMODB_TABLE,
      Key: {
        id: data.id,
      },
    };

    // fetch from db
    return new Promise((resolve, reject)=>{
      dynamodb.get(params, (error, result) => {
        // handle potential errors
        if (error) {
          console.error(error);
          reject(error);

        // } else if (!Object.keys(result).length){
        //   let errorResponse = Boom.notFound("No Records Found for id : "+data.id).output.payload;
        //   console.error(errorResponse);
        //   reject(errorResponse);

        }
        else {
          resolve(result)
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
      body: JSON.stringify(result)
    };
    callback(null, response);
  }).
  catch((err)=>{
    callback(null, {
      headers: { 'Content-Type': 'application/json' },
      ...err
    });
  })

};
