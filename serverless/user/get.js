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




  function handler(data) {

    const params = {
      TableName: process.env.USER_TABLE,
      Key: {
        id: data.sub,
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


    decodeToken(event).then((user)=>{
      return handler(user);
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
