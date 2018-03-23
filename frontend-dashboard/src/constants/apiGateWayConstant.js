/**
 * Created by supun on 10/03/18.
 */
export const REDUX_API_GATEWAY_ACTIONS = {

    //saga action
    API_GATEWAY_FETCHING:'API_GATEWAY_FETCHING',
    API_GATEWAY_FETCH_LATEST:'API_GATEWAY_FETCH_LATEST',
    API_GATEWAY_FETCHING_SUCCESS : 'API_GATEWAY_FETCHING_SUCCESS',
    API_GATEWAY_FETCHING_FAILURE:'API_GATEWAY_FETCHING_FAILURE',
    //pets action
    GET_PETS_SUCCESS:'GET_PETS_SUCCESS',
    GET_PETS_FAILE:'GET_PETS_FAILE',

    //schedulte action
    GET_SCHEDULE_EVENT_SUCCESS:'GET_SCHEDULE_EVENT_SUCCESS',
    GET_SCHEDULE_EVENT_FAILE:'GET_SCHEDULE_EVENT_FAILE',
    POST_SCHEDULE_EVENT_SUCCESS:'POST_SCHEDULE_EVENT_SUCCESS',
    POST_SCHEDULE_EVENT_FAIL:'POST_SCHEDULE_EVENT_FAIL',
    UPDATE_SCHEDULE_EVENT_SUCCESS:'UPDATE_SCHEDULE_EVENT_SUCCESS',
    UPDATE_SCHEDULE_EVENT_FAIL:'UPDATE_SCHEDULE_EVENT_FAIL',
    DELETE_SCHEDULE_EVENT_SUCCESS:'DELETE_SCHEDULE_EVENT_SUCCESS',
    DELETE_SCHEDULE_EVENT_FAIL:'DELETE_SCHEDULE_EVENT_FAIL',
    SCHEDULE_TIME_SLOT_CONSULTEE_SUCCESS:'SCHEDULE_TIME_SLOT_CONSULTEE_SUCCESS',
    SCHEDULE_TIME_SLOT_CONSULTEE_FAILE:'SCHEDULE_TIME_SLOT_CONSULTEE_FAILE',


};


export const ACTION_KEY ={
    GETPETS:"GETPETS",
    GET_SCHEDULE_EVENTS:'GET_SCHEDULE_EVENTS',
    POST_SCHEDULE_EVENTS:'POST_SCHEDULE_EVENTS',
    UPDATE_SCHEDULE_EVENTS:'UPDATE_SCHEDULE_EVENTS',
    DELETE_SCHEDULE_EVENTS:'DELETE_SCHEDULE_EVENTS',
    SCHEDULE_TIME_SLOT_CONSULTEE:'SCHEDULE_TIME_SLOT_CONSULTEE'
};
export const ENDPOINTS = {
    PETSTORE: 'PetStore',
    CONSULT_API:'ConsultantApi'


};
export const API_ROUTE = {
    PETS: '/pets',
    SCHEDULE:'/schedule',
    UPDATE_SCHEDULE:'/schedule/update'

};
export const ACTION_ATTR ={
    PAYLOAD:'payload',
    DATA:'data'
};
