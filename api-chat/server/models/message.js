'use strict';
const Assert = require('assert');
const Joi = require('joi');
const MongoModels = require('mongo-models');
const NewDate = require('joistick/new-date');


const schema = Joi.object({
    _id: Joi.object(),
    room: Joi.string().required(),
    sender: Joi.string().required(),
    body: Joi.string().required(),
    timestamp: Joi.date().default(NewDate(), 'time of creation')

});


class Message extends MongoModels {
    static async create(name) {

        Assert.ok(name, 'Missing name argument.');

        const document = new this({
            name: this.nameAdapter(name.trim())
        });
        const accounts = await this.insertOne(document);

        return accounts[0];
    }

    static findByUsername(username) {

        Assert.ok(username, 'Missing username argument.');

        const query = { 'user.name': username.toLowerCase() };

        return this.findOne(query);
    }


}


Message.collectionName = 'messages';
Message.schema = schema;
Message.indexes = [
    { key: { 'user.id': 1 } },
    { key: { 'user.name': 1 } }
];


module.exports = Message;
