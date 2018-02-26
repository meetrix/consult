import React from "react"
import PropTypes from "prop-types"
import SentMessage from "./SentMessage";
import ReceivedMessage from "./ReceivedMessage";

const Message = ({ message, author, isSent }) => {
    if(isSent){
         return(
            <SentMessage message={message} author={author}/>
         )
    } else {
        return(
            <ReceivedMessage message={message} author={author}/>
        )
    }
}

Message.propTypes = {
    isSent: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}

export default Message