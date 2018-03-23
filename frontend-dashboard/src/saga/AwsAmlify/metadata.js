/**
 * Created by supun on 10/03/18.
 */
import {ACTION_KEY as KEYS,REDUX_AWS_AMPLIFY_ACTIONS as ACTIONS } from '../../constants/apiAmlifyConstant';


let metadata = {};
metadata[KEYS.GET_AUTH_USER] = {
    method:'GET_AUTH_USER',
    successAction: ACTIONS.GET_AUTH_USER_SUCCESS,
    failureAction: ACTIONS.GET_AUTH_USER_FAILE
};

export default metadata;
