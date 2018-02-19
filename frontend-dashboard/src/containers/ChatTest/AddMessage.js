import { connect } from 'react-redux'
import AddMessageComponent from '../../components/ChatTest/AddMessage'
import {addMessage} from "../../constants/constant";

const mapDispatchToProps = dispatch => ({
    dispatch: (message, author) => {
        dispatch(addMessage(message, author))
    }
})

export const AddMessage = connect(() => ({}), mapDispatchToProps)(AddMessageComponent)