'use strict';
const Account = require('../../../server/models/account');
const User = require('../../../server/models/user');
const Session = require('../../../server/models/session');


const user = new User({
    _id: '535HOW35',
    username: 'stimpy',
    roles: {
        account: {
            id: '5250W35',
            name: 'Stimpson J Cat'
        }
    },
    _roles: {
        account: new Account({
            _id: '5250W35',
            name: {
                first: 'Stimpson',
                middle: 'J',
                last: 'Cat'
            }
        })
    }
});

const session = new Session({
    '_id': '5250W35'
});


module.exports = {
    user,
    roles: user._roles,
    scope: Object.keys(user.roles),
    session
};
