
const BACKEND_URL = 'http://localhost:9000';
export const REDUX_ACTIONS = {
    //saga action
    FETCHING:'FETCHING',
    FETCH_LATEST:'FETCH_LATEST',
    FETCHING_SUCCESS : 'FETCHING_SUCCESS',
    FETCHING_FAILURE:'FETCHING_FAILURE',
    //tutor redux action

    SET_TUTOR_DATA: "SET_TUTOR_DATA",
    HANDLE_TUTOR_DATA_FETCH_FAILURE: "HANDLE_TUTOR_DATA_FETCH_FAILURE",
    //login redux action
    HANDLE_LOGIN_DATA_FETCH_FAILURE:"HANDLE_LOGIN_DATA_FETCH_FAILURE",
    SET_LOGIN_DATA:"SET_LOGIN_DATA",

}
export const STORE_INITIATE_VALUE={
    AUTH_INITIATE: [
    {
        isLogin:false,
        user: {
            _id:undefined,
            username: undefined,
            email: undefined,
            roles: undefined
        },
        session: undefined,
        authHeader:undefined
    }
]

}

export const ACTION_KEY ={

    LOGIN:"LOGIN",
    TUTOR :"TUTOR"
}

export const ACTION_ATTR ={
    PAYLOAD:'payload'
}
export const URLS = {
    TUTOR: BACKEND_URL+'/tutor',
    LOGIN:BACKEND_URL+'/api/login'
};
export const HTTP_METHODS = {
    GET: "GET",
    POST: "POST"
};
export const FETCH_KEYS = {
    MERCHANT_ID: 'merchantId',
    REGISTER_NO: 'registerNo',
    MAC_ADDRESS: 'macAddress'
};

export const HTTP_CODES = {
    SUCCESS: 200,
    INTERNAL_ERROR: 500,
    BAD_REQUEST: 400,
    NOT_AUTHENTICATED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404
};
export const TIMEOUTS = {
    AUTH_REDIRECT: 1000,
    LOCAL_PROXY_SEND_RETRY: 1000,
    SECOND_IN_MILLIS: 1000
};
