import { combineReducers } from 'redux'
import auth from './auth'
import consultants from './consultants'
import schedule from './scheduler'

const rootReducer = combineReducers({
    auth,
    consultants,
    schedule,
});
export default rootReducer;
