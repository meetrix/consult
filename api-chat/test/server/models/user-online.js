'use strict';
const UserOnline = require('../../../server/models/user-online');
const Code = require('code');
const Config = require('../../../config');
const Fixtures = require('../fixtures');
const Lab = require('lab');



const lab = exports.lab = Lab.script();
const config = Config.get('/hapiMongoModels/mongodb');


lab.experiment('UserOnline Model', () => {

    lab.before(async () => {

        await UserOnline.connect(config.connection, config.options);
        await Fixtures.Db.removeAllData();
    });


    lab.after(async () => {

        await Fixtures.Db.removeAllData();

        UserOnline.disconnect();
    });


    lab.test('it returns a new instance when create succeeds', async () => {

        const userOnline = await UserOnline.create('456644', 'Tue Feb 20 2018 14:17:42 GMT+0530 (+0530)', 'true');

        Code.expect(userOnline).to.be.an.instanceOf(UserOnline);
    });

});
