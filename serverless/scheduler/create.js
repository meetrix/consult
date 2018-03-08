'use strict';

const uuid = require('uuid');
const dynamodb = require('./dynamodb');
const Joi = require('joi');

module.exports.create = (event, context, callback) => {
  const data = JSON.parse(event.body);

  const schema = Joi.object().keys({
      startAt: Joi.string().required(),
      endAt: Joi.string().required()
  });

  function validate  (data, schema) {
      return new Promise((resolve, reject)=>{
          Joi.validate(data, schema, function (err) {
              if(err){
                  reject(err)
              }
              else{
                  resolve(data)
              }
          })
      });
  }

  function handler(data) {

      const timestamp = new Date().getTime();
      const params = {
          TableName: process.env.DYNAMODB_TABLE,
          Item: {
              id: uuid.v1(),
              createdAt: timestamp,
              updatedAt: timestamp,
              ...data
          },
      };

      // write the todo to the database
      return new Promise((resolve, reject)=>{
          dynamodb.put(params, (error) => {
              // handle potential errors
              if (error) {
                  console.error(error);
                  reject(error);
              }
              else {
                resolve(params)
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
      console.error('Validation Failed');
      callback(null, {
          statusCode: 400,
          headers: { 'Content-Type': 'text/plain' },
          body: err,
      });
  })

    // callback(null, {
    //     statusCode: error.statusCode || 501,
    //     headers: { 'Content-Type': 'text/plain' },
    //     body: 'Couldn\'t create the todo item.',
    // });
    //
    //
    // // create a response
    // const response = {
    //     statusCode: 200,
    //     body: JSON.stringify(params.Item),
    // };
    // callback(null, response);

};
