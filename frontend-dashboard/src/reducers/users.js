import { REDUX_ACTIONS } from '../constants/constant'

const users = (state = [], action) => {
    switch (action.type) {
        case REDUX_ACTIONS.ADD_USER:
            return state.concat([{ name: action.name, id: action.id }])
        case REDUX_ACTIONS.USERS_LIST:
            return action.users
        default:
            return state
    }
}

export default users