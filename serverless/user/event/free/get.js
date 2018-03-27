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
      TableName: process.env.CONSULT_TABLE,
      Key: {
        id:  'b4295be3-c675-4ca7-a553-c14b3cf46c16',
      }
    };
    // fetch from db
    return new Promise((resolve, reject)=>{
      dynamodb.get(params, (error, result) => {
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

  function getEventFromUser(user){
    let keys = []
      if(user.Item.events!=null){
        keys = user.Item.events.map((event)=>{
            return {id:event}
          }
        );
      }
      else{
        return {error:'no event pound from user'};
      }

    const params = {
      RequestItems: {
          'serverless-rest-api-with-dynamodb-dev': {
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
          let timeSlotes = result.Responses['serverless-rest-api-with-dynamodb-dev']
          let filterFreeTimeSlot;
          if(timeSlotes!=null){
            filterFreeTimeSlot = timeSlotes.filter((timeSlot)=> (timeSlot.booked==null || timeSlot.booked==false))
            resolve(filterFreeTimeSlot)
          }
          resolve({error:'no free slot'})
        }
      });
    });

  }


  validate(data,schema).then((result)=>{
    return handler(result).then((user)=>{

      return getEventFromUser(user);
    });
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
