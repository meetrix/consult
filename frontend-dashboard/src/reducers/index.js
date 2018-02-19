import { combineReducers } from 'redux'
import tutors from './tutor'
import auth from './auth'
import messages from './messages'
const rootReducer = combineReducers({
    tutors,
    auth,
    messages,
});
export default rootReducer;