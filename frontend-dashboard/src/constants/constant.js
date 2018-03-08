
const BACKEND_URL = 'http://localhost:8080/api/user';
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

    //signup redux action
    HANDLE_SIGNUP_DATA_FETCH_FAILURE:"HANDLE_SIGNUP_DATA_FETCH_FAILURE",
    SET_SIGNUP_DATA:"SET_SIGNUP_DATA",

    //consults redux action
    HANDLE_CONSULTS_DATA_FETCH_FAILURE:"HANDLE_CONSULTS_DATA_FETCH_FAILURE",
    SET_CONSULTS_DATA:"SET_CONSULTS_DATA",

}
export const USER_PROFILE ={
    UPDATE_FIRST_NAME:'UPDATE_FIRST_NAME',
    UPDATE_LAST_NAME:'UPDATE_LAST_NAME',
    UPDATE_EMAIL:'UPDATE_EMAIL',
    UPDATE_IMAGE:'UPDATE_IMAGE',
    UPDATE_ADDRESS:'UPDATE_ADDRESS',
    UPDATE_SCHOOL:'UPDATE_SCHOOL',
    UPDATE_DISTRICT:'UPDATE_DISTRICT',
    UPDATE_STREAM:'UPDATE_STREAM',
    UPDATE_SUBJECT:'UPDATE_SUBJECT'
}
export const STORE_INITIATE_VALUE={
    AUTH_INITIATE:
    {
        user: {
            _id:undefined,
            firstName:'supuh',
            lastName:'mad',
            userName: 'supun',
            email: 'supun.12@cse.mrt.ac.lk',
            imageUrl:'http://localhost:8080/img/avatars/1.jpg',
            roles:'consultee',
            school:'st.aloysius',
            address:'nakiyadeniya galle',
            district:'galle',
            stream:'a/l',
            subject:'maths'
        },
        session: undefined,
        authHeader:undefined
    }


}

export const ACTION_KEY ={

    LOGIN:"LOGIN",
    SIGNUP:"SIGNUP",
    TUTOR :"TUTOR",
    CONSULTS:"CONSULTS"
}

export const ACTION_ATTR ={
    PAYLOAD:'payload',
    DATA:'data'
}
export const URLS = {
    TUTOR: BACKEND_URL+'/tutor',
    LOGIN:BACKEND_URL+'/login',
    SIGNUP:BACKEND_URL+'/signup',
    CONSULTS:BACKEND_URL+'/users'
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

export const ROLE={
    ADMIN:0,
    CONSULTANT:1,
    CONSULTEE:2,


}