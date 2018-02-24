'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _constant = require('../constants/constant');

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case _constant.REDUX_ACTIONS.SET_CONSULTS_DATA:
            {
                return action.payload.data;
            }
        case _constant.REDUX_ACTIONS.HANDLE_CONSULTS_DATA_FETCH_FAILURE:
            {
                return {
                    name: 'DEFAULT_TUTOR_NAME',
                    age: 10
                };
            }
        default:
            return state;
    }
}; /**
    * Created by supun on 08/01/18.
    */
//# sourceMappingURL=consultants.js.map