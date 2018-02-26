import { connect } from 'react-redux'
import AddMessageComponent from '../../components/ChatApp/AddMessage'
import { addMessage } from "../../constants/webrtc";

const mapDispatchToProps = dispatch => ({
    dispatch: (message, author) => {
        dispatch(addMessage(message, author))
    }
})

export const AddMessage = connect(() => ({}), mapDispatchToProps)(AddMessageComponent)