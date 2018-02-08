/**
 * Created by supun on 15/01/18.
 */
import {REDUX_ACTIONS,STORE_INITIATE_VALUE} from '../constants/constant';

export default (state = STORE_INITIATE_VALUE.AUTH_INITIATE, action) => {
    switch (action.type) {
        case REDUX_ACTIONS.SET_LOGIN_DATA: {
            localStorage.setItem('token',action.payload[0].authHeader)
            return action.payload;
        }
        case REDUX_ACTIONS.HANDLE_LOGIN_DATA_FETCH_FAILURE: {
            return {
                name: 'DEFAULT_TUTOR_NAME',
                age: 10
            };
        }
        case REDUX_ACTIONS.SET_SIGNUP_DATA: {

            return state.map( (item, index) => {

                // Otherwise, this is the one we want - return an updated value
                return {
                    ...item,
                    ...action.payload[0]
                };
            });

        }
        case REDUX_ACTIONS.HANDLE_SIGNUP_DATA_FETCH_FAILURE: {
            return {
                name: 'DEFAULT_TUTOR_NAME',
                age: 10
            };
        }
        default:
            return state;
    }
};
