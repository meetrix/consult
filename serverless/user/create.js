/**
 * Created by supun on 19/03/18.
 */
'use strict';

const uuid = require('uuid');
const dynamodb = require('./dynamodb');
const Joi = require('joi');
const Boom = require('boom');

module.exports.create = (event, context, callback) => {
  const data = JSON.parse(event.body);
  const schema = Joi.object().keys({
    username: Joi.string().required()
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
      TableName: process.env.USER_TABLE,
      Item: {
        id: uuid.v1(),
        createdAt: timestamp,
        username: data.username

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
  function updateUserWithEvent(data){
    const timestamp = new Date().getTime();
    const params = {
      TableName: process.env.USER_TABLE,
      Key: {
        id: 'a0dfdaf0-2b85-11e8-818b-1f6245b3b3e6',
      },
      ExpressionAttributeValues: {
        ':event': ['0d534cf0-2b93-11e8-ab74-39ece3a4aacf'],
        ':empty_events': [],
        ':updatedAt': timestamp,

      },
      ExpressionAttributeNames: {
        '#events': 'events'
      },
      UpdateExpression: 'set #events = list_append(if_not_exists(#events, :empty_events), :event),updatedAt= :updatedAt',
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

  validate(data,schema).then((result)=>{
      return  updateUserWithEvent(result)
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
