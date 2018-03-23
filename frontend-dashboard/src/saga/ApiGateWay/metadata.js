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
metadata[KEYS.UPDATE_SCHEDULE_EVENTS] = {
  method:'PUT',
  endPoint: ENDPOINTS.CONSULT_API,
  apiRoute:API_ROUTE.SCHEDULE,
  failureAction: ACTIONS.UPDATE_SCHEDULE_EVENT_FAIL,
  successAction: ACTIONS.UPDATE_SCHEDULE_EVENT_SUCCESS
};
metadata[KEYS.DELETE_SCHEDULE_EVENTS] = {
  method:'DELETE',
  endPoint: ENDPOINTS.CONSULT_API,
  apiRoute:API_ROUTE.SCHEDULE,
  failureAction: ACTIONS.DELETE_SCHEDULE_EVENT_FAIL,
  successAction: ACTIONS.DELETE_SCHEDULE_EVENT_SUCCESS
};
metadata[KEYS.UPDATE_PROFILE_INFO] = {
  method:'PUT',
  endPoint: ENDPOINTS.CONSULT_API,
  apiRoute:API_ROUTE.USER_PROFILE,
  failureAction: ACTIONS.UPDATE_PROFILE_INFO_FAIL,
  successAction: ACTIONS.UPDATE_PROFILE_INFO_SUCCESS
}
metadata[KEYS.SCHEDULE_TIME_SLOT_CONSULTEE] = {
  method:'POST',
  endPoint: ENDPOINTS.CONSULT_API,
  apiRoute:API_ROUTE.UPDATE_SCHEDULE,
  failureAction: ACTIONS.SCHEDULE_TIME_SLOT_CONSULTEE_FAILE,
  successAction: ACTIONS.SCHEDULE_TIME_SLOT_CONSULTEE_SUCCESS
};
metadata[KEYS.GET_AUTH_USER_INIT_DATA] = {
  method:'GET',
  endPoint: ENDPOINTS.CONSULT_API,
  apiRoute:API_ROUTE.USER,
  failureAction: ACTIONS.GET_AUTH_USER_INIT_DATA_FAILE,
  successAction: ACTIONS.GET_AUTH_USER_INIT_DATA_SUCCESS
};
metadata[KEYS.GET_FREE_EVENT_FROM_CONSULTANT] = {
  method:'GET',
  endPoint: ENDPOINTS.CONSULT_API,
  apiRoute:API_ROUTE.USER_EVENTS_FREE,
  failureAction: ACTIONS.GET_FREE_EVENT_FROM_CONSULTANT_FAILE,
  successAction: ACTIONS.GET_FREE_EVENT_FROM_CONSULTANT_SUCCESS
};
metadata[KEYS.GET_CONSULTANTS] = {
  method:'GET',
  endPoint: ENDPOINTS.CONSULT_API,
  apiRoute: API_ROUTE.ADMIN_CONSULTANT,
  failureAction: ACTIONS.GET_CONSULTANTS_FAIL,
  successAction: ACTIONS.GET_CONSULTANTS_SUCCESS
};

export default metadata;
