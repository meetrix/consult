import { combineReducers } from 'redux'
import auth from './auth';
import consultants from './consultants';
import scheduler from './scheduler';
import admin from './admin';
import spinner from './spinner'

const rootReducer = combineReducers({
    auth,
    consultants,
    scheduler,
    admin,
    spinner,
});
export default rootReducer;
