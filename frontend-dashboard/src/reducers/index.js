import { combineReducers } from 'redux'
import auth from './auth'
import consultants from './consultants'

const rootReducer = combineReducers({
    auth,
    consultants,
});
export default rootReducer;