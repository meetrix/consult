'use strict';
const Assert = require('assert');
const Joi = require('joi');
const MongoModels = require('mongo-models');


const schema = Joi.object({
    _id: Joi.object(),
    userId: Joi.string().required(),
    lastSeenTimestamp: Joi.date().required(),
    onLineStatus: Joi.boolean().required()
});


class UserOnline extends MongoModels {
    static async create(userId,lastSeenTimestamp,onLineStatus) {

        Assert.ok(userId, 'Missing userId argument.');
        Assert.ok(lastSeenTimestamp, 'Missing lastSeenTimestamp argument.');
        Assert.ok(onLineStatus, 'Missing onlineStatus argument.');

        const document = new this({
            userId,
            lastSeenTimestamp,
            onLineStatus
        });
        const userOnline = await this.insertOne(document);

        return userOnline[0];
    }


}


UserOnline.collectionName = 'userOnline';
UserOnline.schema = schema;
UserOnline.indexes = [
    { key: { 'UserOnline._id': 1 } }
];


module.exports = UserOnline;
