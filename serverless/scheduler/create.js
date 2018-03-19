'use strict';

const uuid = require('uuid');
const dynamodb = require('./dynamodb');
const Joi = require('joi');
const Boom = require('boom');

module.exports.create = (event, context, callback) => {
  const data = JSON.parse(event.body);

  const schema = Joi.object().keys({
      start: Joi.string().required(),
      end: Joi.string().required(),
      title: Joi.string().required(),
<<<<<<< HEAD
      consultee: Joi.string().required()
=======
      user: Joi.object().required()
>>>>>>> origin
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

      const timestamp = new Date().getTime();
      const params = {
          TableName: process.env.DYNAMODB_TABLE,
          Item: {
              id: uuid.v1(),
              createdAt: timestamp,
              start: data.start,
              end: data.end,
              title:data.title,
<<<<<<< HEAD
              consultee:data.consultee,
              ...data
=======
              users:[data.user]
>>>>>>> origin
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
  function updateUserWithEvent(){
    const timestamp = new Date().getTime();
    const params = {
      TableName: process.env.DYNAMODB_TABLE,
      Item: {
        id: uuid.v1(),
        createdAt: timestamp,
        start: data.start,
        end: data.end,
        title:data.title,
        users:[data.user]
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
          headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*",'Access-Control-Allow-Credentials':"true" },
          body: JSON.stringify(result)
      };
      callback(null, response);
  }).
  catch((err)=>{
      console.error('Validation Failed');
      callback(null, {
          headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*",'Access-Control-Allow-Credentials':"true" },
          ...err
      });
  })

};
