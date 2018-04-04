'use strict';

const dynamodb = require('../../dynamodb');
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

    const params = {
      TableName: process.env.USER_EVENT_MAPPER_TABLE,
      KeyConditionExpression: '#attribute_name = :value',
      ExpressionAttributeNames: { 
        '#attribute_name': 'userId'

    },
    ExpressionAttributeValues: { 
      ':value': data.id
    },
    };
    // fetch from db
    return new Promise((resolve, reject)=>{
      dynamodb.query(params, (error, result) => {
        // handle potential errors
        if (error) {
          console.error(error);
          reject(error);
        }
        else {
          resolve(result)
        }
      });
    });
  }

  function getEvents(eventMappers){
    let keys = []
      if(eventMappers.Items!=null){
        keys = eventMappers.Items.map((event)=>{
            return {id:event.eventId}
          }
        );
      }
      else{
        return {error:'no event pound from user'};
      }

    const params = {
      RequestItems: {
          'Event': {
          Keys: keys
        }
      }
    };


    // fetch from db
    return new Promise((resolve, reject)=>{
      dynamodb.batchGet(params, (error, result) => {
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
          if(result!=null){
            let events = result.Responses.Event.filter((event)=> !event.booked)
            resolve(events)
          }
          
          resolve([{error:'no free event'}])
        }
      });
    });

  }


  validate(data,schema).then((result)=>{
    return handler(result).then((eventMappers)=>{
        return getEvents(eventMappers);
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
  })


};
