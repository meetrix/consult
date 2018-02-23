'use strict';
const Confidence = require('confidence');
const Config = require('./config');


const criteria = {
    env: process.env.NODE_ENV
};


const manifest = {
    $meta: 'This file defines the plot device.',
    server: {
        debug: {
            request: ['error']
        },
        connections: {
            routes: {
                security: true
            }
        }
    },
    connections: [{
        port: Config.get('/port/web'),
        labels: ['web']
    }],
    registrations: [
        {
            plugin: 'hapi-auth-basic'
        },
        {
            plugin: 'lout'
        },
        {
            plugin: 'inert'
        },
        {
            plugin: 'vision'
        },
        {
            plugin: {
                register: 'visionary',
                options: {
                    engines: { jade: 'jade' },
                    path: './server/web'
                }
            }
        },
        {
            plugin: {
                register: 'hapi-mongo-models',
                options: {
                    mongodb: Config.get('/hapiMongoModels/mongodb'),
                    models: {
                        Event:'./server/models/event'
                    },
                    autoIndex: Config.get('/hapiMongoModels/autoIndex')
                }
            }
        },

        {
            plugin: './server/api/index',
            options: {
                routes: { prefix: '/api' }
            }
        },
        {
            plugin: './server/web/index'
        },
        {
            plugin: './server/api/event',
            options: {
                routes: { prefix: '/api' }
            }
        }

    ]
};


const store = new Confidence.Store(manifest);


exports.get = function (key) {

    return store.get(key, criteria);
};


exports.meta = function (key) {

    return store.meta(key, criteria);
};
