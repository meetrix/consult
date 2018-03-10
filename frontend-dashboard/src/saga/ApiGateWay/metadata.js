/**
 * Created by supun on 10/03/18.
 */
import {ACTION_KEY as KEYS, ENDPOINTS ,API_ROUTE,REDUX_API_GATEWAY_ACTIONS as ACTIONS } from '../../constants/apiGateWayConstant';


let metadata = {};
metadata[KEYS.GETPETS] = {
    endPoint: ENDPOINTS.PETSTORE,
    apiRoute:API_ROUTE.PETS,
    failureAction: ACTIONS.GET_PETS_SUCCESS,
    successAction: ACTIONS.GET_PETS_FAILE
};
export default metadata;