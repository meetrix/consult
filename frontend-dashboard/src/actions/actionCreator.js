/**
 * Created by supun on 10/01/18.
 */

import {REDUX_ACTIONS} from '../constants/constant'


export const actionCreatorFactory = (key, ...argNames) => (...args) => {

    const action = {type: REDUX_ACTIONS.FETCHING, key};
    argNames.forEach((arg, index) => {
        action[argNames[index]] = args[index];
    });
    return action;
};
