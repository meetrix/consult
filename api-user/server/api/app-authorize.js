/**
 * Created by supun on 13/02/18.
 */
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

    const AuthAttempt = server.plugins['hapi-mongo-models'].AuthAttempt;

    server.route({
        method: 'POST',
        path: '/app/authorize',
        config: {
            auth: {
                strategy: 'simple'
            }
        },
        handler: function (request, reply) {
            let token = jwt.sign({ foo: 'bar' }, 'shhhhh');
            reply(token);
        }
    });

    next();
}

exports.register = function (server, options, next) {

    server.dependency(['hapi-mongo-models'], internals.applyRoutes);

    next();
};
exports.register.attributes = {
    name: 'app-authorize'
};