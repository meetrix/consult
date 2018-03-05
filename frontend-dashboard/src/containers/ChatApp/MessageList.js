import { connect } from 'react-redux'
import MessagesListComponent from '../../components/ChatApp/MessageList'

export const MessagesList = connect(state => ({
    messages: state.messages
}), {})(MessagesListComponent)