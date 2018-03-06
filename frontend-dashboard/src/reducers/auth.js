/**
 * Created by supun on 15/01/18.
 */
import {REDUX_ACTIONS,STORE_INITIATE_VALUE,USER_PROFILE} from '../constants/constant';

export default (state = STORE_INITIATE_VALUE.AUTH_INITIATE, action) => {
    switch (action.type) {
        case REDUX_ACTIONS.SET_LOGIN_DATA: {
            localStorage.setItem('token',action.payload.authHeader)
            return action.payload;

        }
        case REDUX_ACTIONS.HANDLE_LOGIN_DATA_FETCH_FAILURE: {
            //TODO when login error
            break;
        }
        case REDUX_ACTIONS.SET_SIGNUP_DATA: {
                // Otherwise, this is the one we want - return an updated value
                return {
                    ...state,
                    ...action.payload
                };


        }
        case REDUX_ACTIONS.HANDLE_SIGNUP_DATA_FETCH_FAILURE: {
            //TODO when signup error
            break;
        }
        case USER_PROFILE.UPDATE_FIRST_NAME:
        case USER_PROFILE.UPDATE_EMAIL:
        case  USER_PROFILE.UPDATE_LAST_NAME:
        case  USER_PROFILE.UPDATE_IMAGE:
        case USER_PROFILE.UPDATE_SCHOOL:
        case USER_PROFILE.UPDATE_ADDRESS:
        case  USER_PROFILE.UPDATE_DISTRICT:
        case  USER_PROFILE.UPDATE_STREAM:
        case  USER_PROFILE.UPDATE_SUBJECT:{
            return {
                ...state,
                user:{
                    ...state.user,
                    ...action.data

                }
            };
        }
        default:
            return state;
    }
};
