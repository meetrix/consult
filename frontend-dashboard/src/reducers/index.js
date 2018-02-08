import { combineReducers } from 'redux'
import tutors from './tutor'
import auth from './auth'
import consults from './consults'

const rootReducer = combineReducers({
    tutors,
    auth,
    consults,
});
export default rootReducer;