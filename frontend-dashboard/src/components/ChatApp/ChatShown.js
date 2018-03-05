import React, {Component} from 'react';
import styles from './ChatApp.scss';

import { MessagesList } from "../../containers/ChatApp/MessageList"
import { AddMessage } from "../../containers/ChatApp/AddMessage"

class ChatShown extends Component {
    constructor(props){
        super(props)
        // addWebRTC(props.dispatch, store.getState)
    }

    render() {
        return (
            <div className="container">
                <div className="row chat-window col-xs-5 col-md-3" id="chat_window_1" style={{marginLeft: 10}}>
                        <div className="panel panel-default">
                            <div className="panel-heading top-bar rounded" style={{backgroundColor: "#5bc0de", height: "7vh", textAlign: 'center'}}>
                                        <div className="btn-group dropdown">
                                            <button type="button" className="btn btn-info dropdown-toggle text-light"
                                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                                    onClick={this.props.action}>
                                                Messages&nbsp;
                                            </button>
                                        </div>
                                <div className="col-md-4 col-xs-4" style={{textAlign: 'right'}}>
                                    <a href="#"><span id="minim_chat_window" className="close"/></a>
                                    <a href="#"><span className="close" data-id="chat_window_1"/></a>
                                </div>
                            </div>
                            <div className="panel-body msg_container_base" id="msg_base">
                                <MessagesList/>
                            </div>
                            <AddMessage/>
                        </div>
                </div>
            </div>
        );
    }
}

export default ChatShown;