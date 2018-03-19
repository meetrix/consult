/**
 * Created by supun on 18/03/18.
 */
'use strict';

const uuid = require('uuid');
const dynamodb = require('./dynamodb');
const Joi = require('joi');
const Boom = require('boom');

module.exports.update = (event, context, callback) => {
  const data = JSON.parse(event.body);
  const timestamp = new Date().getTime();

  const schema = Joi.object().keys({
    timeSlot: Joi.object().required(),
    user: Joi.object().required()
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
        id: data.timeSlot.id,
      },
      ExpressionAttributeValues: {
        ':user': [data.user],
        ':empty_users': [],
        ':updatedAt': timestamp,

      },
      ExpressionAttributeNames: {
        '#users': 'users'
      },
      UpdateExpression: 'set #users = list_append(if_not_exists(#users, :empty_users), :user),updatedAt= :updatedAt',
      ReturnValues: 'ALL_NEW',
    };

    // write the todo to the database
    return new Promise((resolve, reject)=>{
      dynamodb.update(params, (error) => {
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
      body: JSON.stringify(err)
    });
  })

};
