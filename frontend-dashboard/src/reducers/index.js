import { combineReducers } from 'redux'
import auth from './auth'
import consults from './consults'

const rootReducer = combineReducers({
    auth,
    consults,
});
export default rootReducer;