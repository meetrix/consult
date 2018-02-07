import React, { Component } from 'react';
import ChatApp from "../../../components/ChatApp";

class Session extends Component {

    render() {
        return (

            <div>
                <iframe src="https://whiteboard.siplo.lk"
                        height={window.innerHeight}
                        width={window.innerWidth} />
                <ChatApp></ChatApp>
            </div>
        )
    }
}

export default Session;
