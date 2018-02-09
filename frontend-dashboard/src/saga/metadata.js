/**
 * Created by supun on 10/01/18.
 */
import {ACTION_KEY as KEYS, REDUX_ACTIONS as ACTIONS, URLS, HTTP_METHODS, FETCH_KEYS} from '../constants/constant';


let metadata = {};
metadata[KEYS.TUTOR] = {
    url: URLS.TUTOR,
    options: {
        method: HTTP_METHODS.POST
    },
    failureAction: ACTIONS.HANDLE_TUTOR_DATA_FETCH_FAILURE,
    successAction: ACTIONS.SET_TUTOR_DATA
};
metadata[KEYS.CONSULTS] = {
    url: URLS.CONSULTS,
    options: {
        method: HTTP_METHODS.GET
    },
    failureAction: ACTIONS.HANDLE_CONSULTS_DATA_FETCH_FAILURE,
    successAction: ACTIONS.SET_CONSULTS_DATA
};
metadata[KEYS.LOGIN] = {
    url: URLS.LOGIN,
    options: {
        method: HTTP_METHODS.POST
    },
    failureAction: ACTIONS.HANDLE_LOGIN_DATA_FETCH_FAILURE,
    successAction: ACTIONS.SET_LOGIN_DATA
};
metadata[KEYS.SIGNUP] = {
    url: URLS.SIGNUP,
    options: {
        method: HTTP_METHODS.POST
    },
    failureAction: ACTIONS.HANDLE_SIGNUP_DATA_FETCH_FAILURE,
    successAction: ACTIONS.SET_SIGNUP_DATA
};

export default metadata;