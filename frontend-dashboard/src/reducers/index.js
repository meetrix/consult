import { combineReducers } from 'redux'
import auth from './auth';
import consultants from './consultants';
import scheduler from './scheduler';
import admin from './admin';
import spinner from './spinner';
import customize from './customize';

const rootReducer = combineReducers({
    auth,
    consultants,
    scheduler,
    admin,
    spinner,
    customize
});
export default rootReducer;
