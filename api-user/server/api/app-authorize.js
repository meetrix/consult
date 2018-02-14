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

    const App = server.plugins['hapi-mongo-models'].App;

    server.route({
        method: 'POST',
        path: '/app/authorize',
        config: {
            auth: {
                strategy: 'simple'
            },
            validate: {
                payload: {
                    appId:Joi.string().required()

                }
            }
        },
        handler: function (request, reply) {
            const appId = request.payload.appId;
            App.findByAppId(appId, (err, app) => {
                console.log(err)
                console.log(app)
                if (err) {
                    return reply(err);
                }

                if (!app) {
                    return reply(Boom.notFound('App not found. That is strange.'));
                }

                reply(app);
            });
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