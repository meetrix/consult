/**
 * Created by supun on 12/02/18.
 */
'use strict';
const MongoModels = require('mongo-models');
const Joi = require('joi');
class Event extends MongoModels{


    static create(title,start,end,owners, callback) {

        const document = {
            title,
            start,
            end,
            owners

        };

        this.insertOne(document, (err, docs) => {

            if (err) {
                return callback(err);
            }

            callback(null, docs[0]);
        });
    }


}
Event.collection = 'event';


Event._idClass = String;


Event.schema = Joi.object({
    title:Joi.string().required(),
    start:Joi.date().required(),
    end:Joi.date().required(),
    owners:Joi.array().items(Joi.string().required()),
});


module.exports = Event;