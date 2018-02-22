import { REDUX_ACTIONS} from "../constants/constant";
import {messageAdded} from "../containers/SimpleWebRTC/SimpleWebRTC";

const messages = (state = [], action) => {
    switch (action.type) {
        case REDUX_ACTIONS.ADD_MESSAGE:
            messageAdded(action)
            return state.concat([
                {
                    isSent: true,
                    message: action.message,
                    author: action.author,
                    id: action.id
                }
            ])
        case REDUX_ACTIONS.MESSAGE_RECEIVED:
            return state.concat([
                {
                    isSent: false,
                    message: action.message,
                    author: action.author,
                    id: action.id
                }
            ])
        default:
            return state
    }
}

export default messages