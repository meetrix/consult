import React from "react"
import PropTypes from "prop-types"

const ReceivedMessage = ({ message, author }) => {
    return(
        <div className="row msg_container base_receive">
            <div className="col-md-2 col-xs-2 avatar">
                <img
                    src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg"
                    className=" img-responsive "/>
            </div>
            <div className="col-xs-10 col-md-10">
                <div className="messages msg_receive">
                    <p>
                        <i>{author}</i>: {message}
                    </p>
                </div>
            </div>
        </div>
    )
}

ReceivedMessage.propTypes = {
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}

export default ReceivedMessage