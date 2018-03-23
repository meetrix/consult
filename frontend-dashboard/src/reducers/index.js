import { combineReducers } from 'redux'
import auth from './auth'
import consultants from './consultants'
import scheduler from './scheduler'
import admin from './admin'

const rootReducer = combineReducers({
    auth,
    consultants,
    scheduler,
    admin
});
export default rootReducer;
