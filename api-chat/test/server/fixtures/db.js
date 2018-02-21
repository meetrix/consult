'use strict';
const Message = require('../../../server/models/message');

class Db {
    static async removeAllData() {

        return await Promise.all([
            Message.deleteMany({})
        ]);
    }
}


module.exports = Db;
