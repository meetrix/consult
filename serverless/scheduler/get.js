'use strict';

const dynamodb = require('./dynamodb');
const Joi = require('joi');
const Boom = require('boom');

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
    let beginDate = new Date('December 17, 1995 03:24:00').toISOString();

    console.log("ID: "+data.id);
    const params = {
      TableName: process.env.USER_EVENT_MAPPER_TABLE,
      KeyConditionExpression: 'userId = :value AND #eventBeginDate >= :date', // a string representing a constraint on the attribute
      // a string representing a constraint on the attribute
      ExpressionAttributeNames: { // a map of substitutions for attribute names with special characters
        '#eventBeginDate': 'startDate'
      },
      ExpressionAttributeValues: { // a map of substitutions for all attribute values
        ':value': data.id,
        ':date': beginDate
      },
    };

    // fetch from db
    return new Promise((resolve, reject)=>{
      dynamodb.query(params, (error, result) => {
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

  function getEvents(data){
    console.log("Data: "+data);
    let keys = [];
    if(data.Items != null){
      console.log("Items: "+data.Items);
      keys = data.Items.map((Item)=>{
        return {id:Item.eventId}
      })
    }else{
      return {error:'No Event Ids found'}
    }

    const params = {
      RequestItems: {
          'Event': {
          Keys: keys
        }
      }
    };

    return new Promise((resolve, reject)=>{
      dynamodb.batchGet(params, (error, result) => {
        // handle potential errors
        if (error) {
          console.error(error);
          reject(error);

        }
        else {
          resolve(result);
        }
      });
    });
  }

  validate(data, schema).then((result)=>{
    return handler(result).then((data)=>{
      return getEvents(data)
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
    callback(null, {
      headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*",'Access-Control-Allow-Credentials':"true" },
      ...err
    });
  })

};
