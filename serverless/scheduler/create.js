'use strict';

const uuid = require('uuid');
const dynamodb = require('./dynamodb');
const Joi = require('joi');
const Boom = require('boom');

var https = require('https');
var jose = require('node-jose');

var region = 'us-west-2';
var userpool_id = 'us-west-2_bjkyFObpw';
var app_client_id = '35fphtvuuravdlpm0veleocv79';
var keys_url = 'https://cognito-idp.' + region + '.amazonaws.com/' + userpool_id + '/.well-known/jwks.json';


module.exports.create = (event, context, callback) => {

  let data = JSON.parse(event.body);
  //data['token'] = 'eyJraWQiOiJQN0M3bHVhTk01VWgyMkpyUTdNQzQ2VExFeHRoeTllczVkUUlkb3QxdHNrPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIwNmQ0ODUyOS1mMTg2LTQxZjgtODc4NC0xYjUwYTVkZGMxMTIiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLnVzLXdlc3QtMi5hbWF6b25hd3MuY29tXC91cy13ZXN0LTJfYmpreUZPYnB3IiwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjpmYWxzZSwiY29nbml0bzp1c2VybmFtZSI6InRzdXB1biIsImF1ZCI6IjM1ZnBodHZ1dXJhdmRscG0wdmVsZW9jdjc5IiwiZXZlbnRfaWQiOiJiYTA3ZTcyYy0yYmYyLTExZTgtYWIxZS1lMWUxODNlNmNkYjYiLCJ0b2tlbl91c2UiOiJpZCIsImF1dGhfdGltZSI6MTUyMTUxODIxMywiY3VzdG9tOm1haW5Sb2xlIjoiY29uc3VsdGFudCIsImN1c3RvbTpzdWJSb2xlIjoidGVhY2hlciIsImN1c3RvbTp0ZW5hbnQiOiJzaXBsbyIsInBob25lX251bWJlciI6Iis5NDcxMTEzNTAxMiIsImV4cCI6MTUyMTUyMTgxMywiaWF0IjoxNTIxNTE4MjEzLCJlbWFpbCI6InN1cHVubWFkdXNoYW5rYTEyMjE5QGdtYWlsLmNvbSJ9.fnBqtC7ka0g1XXN7iAsqXQ68l2RJGY30VvrSbvc1pWEI6m1VFnR3VIcPVhcNrI3NAimwysWLPCRWgaJb1tjLi8ReTYD3d2pBCYRaIxbJOkzjmx1jt4F9eEG2e0xy_RdMugj0O1crRHmeryHMm0ogD00WE3nVxJde9TdQ8v4mX8yxTt-MowqFH1i5WHc6A0B_OASDNyOZvU-1Qsn1E2JB5icZG7CAzbf3gDrntiV7dFXbMrzG5D05pbxFCECD7aioFy-jKyvi8yr5AhFm31NPcq4w_f2kiStTh8NedYURD4XmDlYFlfoIa2t0BXkZXMDMLMsl8v1WCt7yYEhh3zsoaw';
  const schema = Joi.object().keys({
      start: Joi.string().required(),
      end: Joi.string().required(),
      title: Joi.string().required(),
      consultee: Joi.string().required()

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

  function handler(data,user) {

      const timestamp = new Date().getTime();
      const params = {
          TableName: process.env.DYNAMODB_TABLE,
          Item: {
              id: uuid.v1(),
              createdAt: timestamp,
              start: data.start,
              end: data.end,
              title:data.title,
              consultee:data.consultee,
              users:[user],


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
    console.log(data)
    const timestamp = new Date().getTime();
    const params = {
      TableName: process.env.CONSULT_TABLE,
      Key: {
        id: data.Item.users[0].sub,
      },
      ExpressionAttributeValues: {
        ':event': [data.Item.id],
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
      dynamodb.update(params, (error,data) => {
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

  function decodeToken(event){

   const token = event.headers.Authorization;
   var sections = token.split('.');
   // get the kid from the headers prior to verification
   var header = jose.util.base64url.decode(sections[0]);
   header = JSON.parse(header);
   var kid = header.kid;
   // download the public keys
   return new Promise((resolve, reject)=>{
     https.get(keys_url, function(response) {
       if (response.statusCode == 200) {
         response.on('data', function(body) {
           var keys = JSON.parse(body)['keys'];
           // search for the kid in the downloaded public keys
           var key_index = -1;
           for (var i=0; i < keys.length; i++) {
             if (kid == keys[i].kid) {
               key_index = i;
               break;
             }
           }
           if (key_index == -1) {
             console.log('Public key not found in jwks.json');
             callback('Public key not found in jwks.json');
           }
           // construct the public key
           jose.JWK.asKey(keys[key_index]).
           then(function(result) {
             // verify the signature
             jose.JWS.createVerify(result).
             verify(token).
             then(function(result) {
               // now we can use the claims
               var claims = JSON.parse(result.payload);
               let user = {
                 sub:claims.sub,
                 username:claims.username
               }
               resolve(user)
             }).
             catch(function() {
               reject(claims)
             });
           });
         });
       }
     });
   });

 };


  validate(data, schema).then((result)=>{
     return decodeToken(event).then((user) =>{
       return  handler(result,user).then((result)=>{
         return updateUserWithEvent(result)
       })
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
