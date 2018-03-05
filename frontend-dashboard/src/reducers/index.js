import { combineReducers } from 'redux'
import auth from './auth'
import messages from './messages'
import users from './users'
import consultants from './consultants'

const rootReducer = combineReducers({
    auth,
    messages,
    users,
    consultants
});
export default rootReducer;