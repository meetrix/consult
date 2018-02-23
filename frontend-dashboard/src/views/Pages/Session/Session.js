import React, { Component } from 'react';
import ChatApp from "../../../components/ChatApp";
import FileShare from "../../../components/FileShare";
import Video from "../../../components/Video";

class Session extends Component {

    render() {
        return (
            <div>
                <iframe src="https://whiteboard.siplo.lk"
                        height={window.innerHeight}
                        width={window.innerWidth} />
                <Video/>
                <FileShare/>
                <ChatApp/>

            </div>
        )
    }
}

export default Session;
