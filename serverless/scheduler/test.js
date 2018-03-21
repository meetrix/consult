/**
 * Created by supun on 21/03/18.
 */
'use strict';

const uuid = require('uuid');
const dynamodb = require('./dynamodb');
const Joi = require('joi');
const Boom = require('boom');

var https = require('https');
var jose = require('node-jose');



module.exports.create = (event, context, callback) => {


  const response = {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*",'Access-Control-Allow-Credentials':"true" },
    body: JSON.stringify({token:event.headers.Authorization})
  };
  callback(null, response);

};
