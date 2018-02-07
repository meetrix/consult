/**
 * Created by supun on 07/02/18.
 */
'use strict';
const AuthPlugin = require('../auth');
const Async = require('async');
const Boom = require('boom');
const Joi = require('joi');
const jwt = require('jsonwebtoken');

const internals = {};


internals.applyRoutes = function (server, next) {
    server.route({
        method: 'GET',
        path: '/conference/jwt',
        handler: function (request, reply) {
            let token = jwt.sign({ foo: 'bar' }, 'shhhhh');
            reply(token);
        }
    });

    next();
}

exports.register = function (server, options, next) {

    server.dependency(['auth', 'hapi-mongo-models'], internals.applyRoutes);

    next();
};