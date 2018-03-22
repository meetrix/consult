'use strict';

const dynamodb = require('./dynamodb');
const Joi = require('joi');
const Boom = require('boom');

var https = require('https');
var jose = require('node-jose');

var region = 'us-west-2';
var userpool_id = 'us-west-2_bjkyFObpw';
var app_client_id = '35fphtvuuravdlpm0veleocv79';
var keys_url = 'https://cognito-idp.' + region + '.amazonaws.com/' + userpool_id + '/.well-known/jwks.json';



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


  function handler(data) {

    const params = {
      TableName: process.env.CONSULT_TABLE,
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

  function getEventFromUser(user){
    let keys = []
    if(user.events!=null){
      keys= user.events.map((event)=>{
          return {id:event.id}
        }
      );
    }
    else{
      return {error:'no event pound from user'};
    }

    const params = {
      TableName: process.env.DYNAMODB_TABLE,
      Keys: keys,
      ExpressionAttributeValues: {
        ':isBooking': false

      },
      KeyConditionExpression: "isBooking = :isBooking",
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


  validate(data,schema).then((data)=>{
    return handler(data)
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
