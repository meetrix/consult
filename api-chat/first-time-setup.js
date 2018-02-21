'use strict';
const MongoModels = require('mongo-models');
const Promptly = require('promptly');


const main = async function () {

    let options = {};

    // get mongodb connection info

    options = {
        default: 'mongodb://localhost:27017/'
    };
    const mongodbUri = await Promptly.prompt(`MongoDB URI: (${options.default})`, options);

    options = {
        default: 'api-starter-sample-db'
    };
    const mongodbName = await Promptly.prompt(`MongoDB name: (${options.default})`, options);

    // connect to db

    const db = await MongoModels.connect({ uri: mongodbUri, db: mongodbName });

    if (!db) {
        throw Error('Could not connect to MongoDB.');
    }


    // all done

    MongoModels.disconnect();

    console.log('First time setup complete.');

    process.exit(0);
};


main().catch((err) => {

    console.log('First time setup failed.');
    console.error(err);

    MongoModels.disconnect();

    process.exit(1);
});
