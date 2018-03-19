/**
 * Created by supun on 10/03/18.
 */
import {ACTION_KEY as KEYS, ENDPOINTS ,API_ROUTE,REDUX_API_GATEWAY_ACTIONS as ACTIONS } from '../../constants/apiGateWayConstant';


let metadata = {};
metadata[KEYS.GETPETS] = {
    method:'POST',
    endPoint: ENDPOINTS.PETSTORE,
    apiRoute:API_ROUTE.PETS,
    failureAction: ACTIONS.GET_PETS_SUCCESS,
    successAction: ACTIONS.GET_PETS_FAILE
};
metadata[KEYS.GET_SCHEDULE_EVENTS] = {
  method:'GET',
  endPoint: ENDPOINTS.CONSULT_API,
  apiRoute:API_ROUTE.SCHEDULE,
  failureAction: ACTIONS.GET_SCHEDULE_EVENT_FAILE,
  successAction: ACTIONS.GET_SCHEDULE_EVENT_SUCCESS
};
metadata[KEYS.POST_SCHEDULE_EVENTS] = {
  method:'POST',
  endPoint: ENDPOINTS.CONSULT_API,
  apiRoute:API_ROUTE.SCHEDULE,
  failureAction: ACTIONS.POST_SCHEDULE_EVENT_FAIL,
  successAction: ACTIONS.POST_SCHEDULE_EVENT_SUCCESS
};
metadata[KEYS.SCHEDULE_TIME_SLOT_CONSULTEE] = {
  method:'POST',
  endPoint: ENDPOINTS.CONSULT_API,
  apiRoute:API_ROUTE.UPDATE_SCHEDULE,
  failureAction: ACTIONS.SCHEDULE_TIME_SLOT_CONSULTEE_FAILE,
  successAction: ACTIONS.SCHEDULE_TIME_SLOT_CONSULTEE_SUCCESS
};
export default metadata;
