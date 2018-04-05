'use strict';

const dynamodb = require('./dynamodb');
const Joi = require('joi');
const Boom = require('boom');

module.exports.update = (event, context, callback) => {
  const data = JSON.parse(event.body);
  const timestamp = new Date().getTime();
  const schema = Joi.object().keys({
    event: Joi.object().keys({
      id: Joi.string().required()
    }),
    user: Joi.object().keys({
      id: Joi.string().required(),
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),

    })

  });

  function validate(data, schema) {
    return new Promise((resolve, reject) => {
      Joi.validate(data, schema, function (err) {
        if (err) {
          reject(Boom.badRequest(JSON.stringify(err.details)).output.payload)
        }
        else {
          resolve(data)
        }
      })
    });
  }

  function eventBook(data) {
    const params = {
      TableName: process.env.EVENT_TABLE,
      Key: {
        id: data.event.id,
      },
      ExpressionAttributeValues: {
        ':updatedAt': timestamp,
        ':booked': true
      },
      UpdateExpression: 'set booked=:booked,updatedAt= :updatedAt',
      ReturnValues: 'ALL_NEW',
    };
    // write the todo to the database
    return new Promise((resolve, reject) => {
      dynamodb.update(params, (error, data) => {
        // handle potential errors
        if (error) {
          console.error(error);
          reject(error);
        }
        else {
          resolve(data)
        }
      });
    });
  }
  function insertEventAndUserToMapper(eventData,updateEvent){
    const timestamp = new Date().getTime();
    const params = {
      TableName: process.env.USER_EVENT_MAPPER_TABLE,
      Item: {
        userId: eventData.user.id,
        eventId:eventData.event.id,
        startDate:updateEvent.Attributes.start,
        createdAt: timestamp,
        firstName: eventData.user.firstName,
        lastName: eventData.user.lastName,
      },
      ReturnValues: 'ALL_OLD',
    };

    // write the todo to the database
    return new Promise((resolve, reject)=>{
      dynamodb.put(params, (error,data) => {
        // handle potential errors
        if (error) {
          console.error(error);
          reject(error);
        }
        else {
          resolve(data)
        }
      });
    });
  }

 //  function userUpdateWithEvent(data) {
 //    const params = {
 //      TableName: process.env.CONSULT_TABLE,
 //      Key: {
 //        id: data.user.id,
 //      },
 //      ExpressionAttributeValues: {
 //        ':updatedAt': timestamp,
 //        ':event': [data.event.id],
 //        ':empty_events':[]
 //      },
 //      ExpressionAttributeNames: {
 //        '#e': 'events',
 //
 //      },
 //      UpdateExpression: 'set #e= list_append(if_not_exists(#e, :empty_events), :event),updatedAt= :updatedAt',
 //      ReturnValues: 'ALL_NEW',
 //    };
 //
 //
 //  // write the todo to the database
 //  return new Promise((resolve, reject) => {
 //    dynamodb.update(params, (error, data) => {
 //      // handle potential errors
 //      if (error) {
 //        console.error(error);
 //        reject(error);
 //      }
 //      else {
 //        resolve(data)
 //      }
 //    });
 //  });
 // }

  validate(data, schema).then((validateData)=>{

    return eventBook(validateData).then((updateEvent)=>{

      return insertEventAndUserToMapper(validateData,updateEvent)
    })

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
  });

}

