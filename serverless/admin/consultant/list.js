'use strict'

const uuid = require('uuid');
const dynamodb = require('../dynamodb');
const Joi = require('joi');
const Boom = require('boom');

module.exports.list = (event, context, callback) =>{
  let data = ['1234', '1234', '1234'];
  let schema = Joi.array().required();

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

    console.log('table name : '+process.env.CONSULT_TABLE);
    //
    // const params = {
    //   RequestItems: {
    //     'serverless-rest-api-with-dynamodb-dev' : {
    //       Keys: [
    //         {'id': {'S': '469ce3d0-2518-11e8-9271-3777bb2c31cd'}}
    //       ]
    //     }
    //   }
    // };
    //
    // // read
    // return new Promise((resolve, reject)=>{
    //   dynamodb.batchGetItem(params, (error, result) => {
    //     // handle potential errors
    //     console.log('test');
    //     if (error) {
    //       console.error(error);
    //       reject(error);
    //     }
    //     else {
    //       resolve(result);
    //       context.succeed(result);
    //     }
    //   });
    // });

    const params = {
      TableName: process.env.CONSULT_TABLE,
      FilterExpression:'#subRole=:value',
      ExpressionAttributeValues: {':value': "teacher"},
      ExpressionAttributeNames: {
        '#subRole' : 'role'
      }
    };

    return new Promise((resolve, reject)=>{
      dynamodb.scan(params, (error, result) =>{
        if(error){
          console.log(error);
          reject(error);
        }
        else {
          resolve(result);
        }
      })
    })
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
