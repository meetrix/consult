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
    static async create(room, sender, body) {

        Assert.ok(room, 'Missing room argument.');
        Assert.ok(sender, 'Missing sender argument.');
        Assert.ok(body, 'Missing body argument.');

        const document = new this({ room, sender, body });
        const messages = await this.insertOne(document);

        return messages[0];
    }

    static findByRoom(room) {

        Assert.ok(room, 'Missing room argument.');

        const query = { 'room': room.toLowerCase() };

        return this.findOne(query);
    }


}


Message.collectionName = 'messages';
Message.schema = schema;
Message.indexes = [
    { key: { 'room': 1 } }
];


module.exports = Message;
