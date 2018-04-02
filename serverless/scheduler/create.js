'use strict';

const uuid = require('uuid');
const dynamodb = require('./dynamodb');
const Joi = require('joi');
const Boom = require('boom');

// var https = require('https');
// var jose = require('node-jose');

// var region = 'us-west-2';
// var userpool_id = 'us-west-2_bjkyFObpw';
// var app_client_id = '35fphtvuuravdlpm0veleocv79';
// var keys_url = 'https://cognito-idp.' + region + '.amazonaws.com/' + userpool_id + '/.well-known/jwks.json';


module.exports.create = (event, context, callback) => {

  let data = JSON.parse(event.body);
  const schema = Joi.object().keys({
      createdBy: Joi.object().required(),
      consultant:Joi.object().required(),
      consultee:Joi.object().required(),
      start: Joi.string().required(),
      end: Joi.string().required(),
      title: Joi.string().required(),
      booked: Joi.boolean().required()
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
              id: uuid.v1(),
              createdBy:data.createdBy,
              consultant:data.consultant,
              consultee:data.consultee,
              createdAt: timestamp,
              start: data.start,
              end: data.end,
              title:data.title,
              booked:data.booked,
              users:[data.consultant,data.consultee],

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
  // function updateUserWithEvent(data){
  //   console.log(data)
  //   let that = this;
  //   const timestamp = new Date().getTime();
  //   const params = {
  //     TableName: process.env.CONSULT_TABLE,
  //     Key: {
  //       id: data.Item.users[0].sub,
  //     },
  //     ExpressionAttributeValues: {
  //       ':event': [data.Item.id],
  //       ':empty_events': [],
  //       ':updatedAt': timestamp,
  //
  //     },
  //     ExpressionAttributeNames: {
  //       '#events': 'events'
  //     },
  //     UpdateExpression: 'set #events = list_append(if_not_exists(#events, :empty_events), :event),updatedAt= :updatedAt',
  //     ReturnValues: 'ALL_NEW',
  //   };
  //
  //   // write the todo to the database
  //   return new Promise((resolve, reject)=>{
  //     dynamodb.update(params, (error,res) => {
  //       // handle potential errors
  //       if (error) {
  //         console.error(error);
  //         reject(error);
  //       }
  //       else {
  //
  //         resolve(data)
  //       }
  //     },data);
  //   });
  // }
  function insertEventAndUserToMapper(eventData){
    const timestamp = new Date().getTime();
    const params = {
      TableName: process.env.USER_EVENT_MAPPER_TABLE,
      Item: {
        id: eventData.Item.users[0].sub,
        eventId:eventData.Item.id,
        date:eventData.Item.start,
        createdAt: timestamp

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
          resolve(eventData)
        }
      });
    });
  }

 //  function decodeToken(event){

 //   const token = event.headers.Authorization;
 //   var sections = token.split('.');
 //   // get the kid from the headers prior to verification
 //   var header = jose.util.base64url.decode(sections[0]);
 //   header = JSON.parse(header);
 //   var kid = header.kid;
 //   // download the public keys
 //   return new Promise((resolve, reject)=>{
 //     https.get(keys_url, function(response) {
 //       if (response.statusCode == 200) {
 //         response.on('data', function(body) {
 //           var keys = JSON.parse(body)['keys'];
 //           // search for the kid in the downloaded public keys
 //           var key_index = -1;
 //           for (var i=0; i < keys.length; i++) {
 //             if (kid == keys[i].kid) {
 //               key_index = i;
 //               break;
 //             }
 //           }
 //           if (key_index == -1) {
 //             console.log('Public key not found in jwks.json');
 //             callback('Public key not found in jwks.json');
 //           }
 //           // construct the public key
 //           jose.JWK.asKey(keys[key_index]).
 //           then(function(result) {
 //             // verify the signature
 //             jose.JWS.createVerify(result).
 //             verify(token).
 //             then(function(result) {
 //               // now we can use the claims
 //               var claims = JSON.parse(result.payload);
 //               let user = {
 //                 sub:claims.sub,
 //                 username:claims.username
 //               }
 //               resolve(user)
 //             }).
 //             catch(function() {
 //               reject(claims)
 //             });
 //           });
 //         });
 //       }
 //     });
 //   });

 // };


  validate(data, schema).then((result)=>{
       return  handler(data).then((result)=>{
         return insertEventAndUserToMapper(result)
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
