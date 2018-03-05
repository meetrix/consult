'use strict';
const Hapi = require('./hapi');
const Db = require('./db');


class Fixtures {}

Fixtures.Hapi = Hapi;
Fixtures.Db = Db;


module.exports = Fixtures;
