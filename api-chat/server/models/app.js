/**
 * Created by supun on 13/02/18.
 */
/**
 * Created by supun on 12/02/18.
 */
'use strict';
const MongoModels = require('mongo-models');
const Joi = require('joi');
class App extends MongoModels{


    static create(appId, callback) {

        const document = {
            appId

        };

        this.insertOne(document, (err, docs) => {

            if (err) {
                return callback(err);
            }

            callback(null, docs[0]);
        });
    }
    static findByAppId(appId, callback) {

        const query = { 'app.appId': appId };

        this.findOne(query, callback);
    }


}
App.collection = 'app';


App._idClass = String;


App.schema = Joi.object({
    appId:Joi.string().required()
});


module.exports = App;
