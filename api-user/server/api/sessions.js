'use strict';
const AuthPlugin = require('../auth');
const Boom = require('boom');
const Joi = require('joi');


const internals = {};


internals.applyRoutes = function (server, next) {

    const Session = server.plugins['hapi-mongo-models'].Session;


    server.route({
        method: 'GET',
        path: '/sessions',
        config: {
            auth: {
                strategy: 'simple',
                scope: 'admin'
            },
            validate: {
                query: {
                    fields: Joi.string(),
                    sort: Joi.string().default('_id'),
                    limit: Joi.number().default(20),
                    page: Joi.number().default(1)
                }
            },
            pre: [
                AuthPlugin.preware.ensureAdminGroup('root')
            ]
        },
        handler: function (request, reply) {

            const query = {};
            const fields = request.query.fields;
            const sort = request.query.sort;
            const limit = request.query.limit;
            const page = request.query.page;

            Session.pagedFind(query, fields, sort, limit, page, (err, results) => {

                if (err) {
                    return reply(err);
                }

                reply(results);
            });
        }
    });


    server.route({
        method: 'GET',
        path: '/sessions/my',
        config: {
            auth: {
                strategy: 'simple',
                scope: ['admin', 'account']
            }
        },
        handler: function (request, reply) {

            const id = request.auth.credentials.user._id.toString();

            Session.find({ userId: id }, (err, session) => {

                if (err) {
                    return reply(err);
                }

                if (!session) {
                    return reply(Boom.notFound('Document not found.'));
                }

                reply(session);
            });
        }
    });


    server.route({
        method: 'GET',
        path: '/sessions/{id}',
        config: {
            auth: {
                strategy: 'simple',
                scope: 'admin'
            },
            pre: [
                AuthPlugin.preware.ensureAdminGroup('root')
            ]
        },
        handler: function (request, reply) {

            Session.findById(request.params.id, (err, session) => {

                if (err) {
                    return reply(err);
                }

                if (!session) {
                    return reply(Boom.notFound('Document not found.'));
                }

                reply(session);
            });
        }
    });


    server.route({
        method: 'DELETE',
        path: '/sessions/my/{id}',
        config: {
            auth: {
                strategy: 'simple'
            },
            pre: [{
                assign: 'current',
                method: function (request, reply) {

                    const currentSession = request.auth.credentials.session._id.toString();

                    if (currentSession === request.params.id) {

                        return reply(Boom.badRequest('Unable to close your current session. You can use logout instead.'));
                    }

                    reply(true);
                }
            }]
        },
        handler: function (request, reply) {

            const id = request.params.id;
            const userId = request.auth.credentials.user._id.toString();

            const filter = {
                _id: Session.ObjectID(id),
                userId
            };

            Session.findOneAndDelete(filter, (err, session) => {

                if (err) {
                    return reply(err);
                }

                if (!session) {
                    return reply(Boom.notFound('Document not found.'));
                }

                reply({ message: 'Success.' });
            });
        }
    });


    server.route({
        method: 'DELETE',
        path: '/sessions/{id}',
        config: {
            auth: {
                strategy: 'simple',
                scope: 'admin'
            },
            pre: [
                AuthPlugin.preware.ensureAdminGroup('root')
            ]
        },
        handler: function (request, reply) {

            Session.findByIdAndDelete(request.params.id, (err, session) => {

                if (err) {
                    return reply(err);
                }

                if (!session) {
                    return reply(Boom.notFound('Document not found.'));
                }

                reply({ message: 'Success.' });
            });
        }
    });


    next();
};


exports.register = function (server, options, next) {

    server.dependency(['auth', 'hapi-mongo-models'], internals.applyRoutes);

    next();
};


exports.register.attributes = {
    name: 'sessions'
};
