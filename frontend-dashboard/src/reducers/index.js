import { combineReducers } from 'redux'
import tutors from './tutor'
import auth from './auth'
const rootReducer = combineReducers({
    tutors,
    auth,
});
export default rootReducer;