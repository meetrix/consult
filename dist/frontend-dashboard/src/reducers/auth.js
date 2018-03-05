'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Created by supun on 15/01/18.
                                                                                                                                                                                                                                                                   */


var _constant = require('../constants/constant');

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _constant.STORE_INITIATE_VALUE.AUTH_INITIATE;
    var action = arguments[1];

    switch (action.type) {
        case _constant.REDUX_ACTIONS.SET_LOGIN_DATA:
            {
                localStorage.setItem('token', action.payload.authHeader);
                return action.payload;
            }
        case _constant.REDUX_ACTIONS.HANDLE_LOGIN_DATA_FETCH_FAILURE:
            {
                //TODO when login error
            }
        case _constant.REDUX_ACTIONS.SET_SIGNUP_DATA:
            {

                // Otherwise, this is the one we want - return an updated value
                return _extends({}, state, action.payload);
            }
        case _constant.REDUX_ACTIONS.HANDLE_SIGNUP_DATA_FETCH_FAILURE:
            {
                //TODO when signup error
            }
        default:
            return state;
    }
};
//# sourceMappingURL=auth.js.map