/**
 * Created by supun on 15/01/18.
 */
import {REDUX_ACTIONS,STORE_INITIATE_VALUE} from '../constants/constant';

export default (state = STORE_INITIATE_VALUE.AUTH_INITIATE, action) => {
    switch (action.type) {
        case REDUX_ACTIONS.SET_LOGIN_DATA: {
            return action.payload;
        }
        case REDUX_ACTIONS.HANDLE_LOGIN_DATA_FETCH_FAILURE: {
            return {
                name: 'DEFAULT_TUTOR_NAME',
                age: 10
            };
        }
        default:
            return state;
    }
};
