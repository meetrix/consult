'use strict';
const Message = require('../../../server/models/message');
// const Code = require('code');
const Config = require('../../../config');
const Fixtures = require('../fixtures/index');
const Lab = require('lab');


const lab = exports.lab = Lab.script();
const config = Config.get('/hapiMongoModels/mongodb');


lab.experiment('Message Model', () => {

    lab.before(async () => {

        await Message.connect(config.connection, config.options);
        await Fixtures.Db.removeAllData();
    });

    lab.after(async () => {

        await Fixtures.Db.removeAllData();

        Message.disconnect();
    });

});
