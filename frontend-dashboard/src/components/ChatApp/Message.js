import React from "react"
import PropTypes from "prop-types"

const Message = ({ message, author, isSent }) => {
    if(isSent){
    return(
    <div className="row msg_container base_sent">
     <div className="col-xs-10 col-md-10">
        <div className="messages msg_sent">
            <p>
            <i>{author}</i>: {message}
            {/*{message}*/}
            </p>
        </div>
     </div>
        <div className="col-md-2 col-xs-2 avatar">
            <img
                src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg"
                className=" img-responsive "/>
        </div>
    </div>
)} else {
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
                            {/*{message}*/}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
    }

Message.propTypes = {
    isSent: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
}

export default Message