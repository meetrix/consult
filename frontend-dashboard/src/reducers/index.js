import { combineReducers } from 'redux'
import auth from './auth'
import consultants from './consultants'
import scheduler from './scheduler'

const rootReducer = combineReducers({
    auth,
    consultants,
    scheduler,
});
export default rootReducer;
