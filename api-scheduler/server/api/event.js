/**
 * Created by supun on 12/02/18.
 */
'use strict';
const Async = require('async');
const Joi = require('joi');
const Boom = require('boom');

const internals = {};


internals.applyRoutes = function (server, next) {


    const Event = server.plugins['hapi-mongo-models'].Event;

    server.route({
        method: 'POST',
        path: '/event/add',
        config: {
            validate: {
                payload: {
                    title:Joi.string().required(),
                    start:Joi.date().required(),
                    end:Joi.date().required(),
                    owners:Joi.array().items(Joi.string().required()),
                }
            },
        },
        handler: function (request, reply) {

            const title = request.payload.title;
            const start = request.payload.start;
            const end = request.payload.end;
            const owners = request.payload.owners;

            Event.create(title,start,end,owners, (err, event) => {

                if (err) {
                    return reply(err);
                }

                reply(event);
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
    name: 'event'
};