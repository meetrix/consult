/**
 * Created by supun on 10/03/18.
 */
export const REDUX_API_GATEWAY_ACTIONS = {

    //saga action
    API_GATEWAY_FETCHING:'API_GATEWAY_FETCHING',
    FETCH_LATEST:'FETCH_LATEST',
    FETCHING_SUCCESS : 'FETCHING_SUCCESS',
    FETCHING_FAILURE:'FETCHING_FAILURE',
    //pets action
    GET_PETS_SUCCESS:'GET_PETS_SUCCESS',
    GET_PETS_FAILE:'GET_PETS_FAILE'

};


export const ACTION_KEY ={
    GETPETS:"GETPETS"
};
export const ENDPOINTS = {
    PETSTORE: 'PetStore',

};
export const API_ROUTE = {
    PETS: '/pets',

};
export const ACTION_ATTR ={
    PAYLOAD:'payload',
    DATA:'data'
};