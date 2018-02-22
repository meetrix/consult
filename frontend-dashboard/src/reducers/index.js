import { combineReducers } from 'redux'
import tutors from './tutor'
import auth from './auth'
import messages from './messages'
import users from './users'
const rootReducer = combineReducers({
    tutors,
    auth,
    messages,
    users,
});
export default rootReducer;