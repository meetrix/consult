/**
 * Created by supun on 19/03/18.
 */
'use strict';

const uuid = require('uuid');
const dynamodb = require('../../dynamodb');
const Joi = require('joi');
const Boom = require('boom');

module.exports.get = (event, context, callback) => {

  //event id
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


  function handler(data) {

    const timestamp = new Date().getTime();
    const params = {
      TableName: process.env.EVENT_TABLE,
      Item: {
        id: data.id,
      },
    };

    // write the todo to the database
    return new Promise((resolve, reject)=>{
      dynamodb.get(params, (error) => {
        // handle potential errors
        if (error) {
          console.error(error);
          reject(error);
        }
        else {
          if(Item!==null){
            let currentTime = new Date();
            let eventStartTime = new Date(Item.start);
            let minDiff = (currentTime.getTime() - eventStartTime.getTime())/60000;
            if(minDiff<10){
                resolve("url")
            }
          }
          resolve("event not found")
        }
      });
    });
  }

  validate(data).then((result)=>{
      return  handler(result)
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
