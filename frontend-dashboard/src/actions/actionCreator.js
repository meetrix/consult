/**
 * Created by supun on 10/01/18.
 */

import {REDUX_ACTIONS} from '../constants/constant'
import {REDUX_API_GATEWAY_ACTIONS} from '../constants/apiGateWayConstant'


export const actionCreatorFactory = (key, ...argNames) => (...args) => {

    const action = {type: REDUX_ACTIONS.FETCHING, key};
    argNames.forEach((arg, index) => {
        action[argNames[index]] = args[index];
    });
    return action;
};

export const actionCreateStoreUpdateFactory = (actionType, ...argNames) => (...args) => {

    const action = {type: actionType};
    argNames.forEach((arg, index) => {
        action[argNames[index]] = args[index];
    });
    return action;
};

export const actionCreateApiGateWayFactory = (key, ...argNames) => (...args) => {

    const action = {type: REDUX_API_GATEWAY_ACTIONS.API_GATEWAY_FETCHING,key};
    argNames.forEach((arg, index) => {
        action[argNames[index]] = args[index];
    });
    return action;
};