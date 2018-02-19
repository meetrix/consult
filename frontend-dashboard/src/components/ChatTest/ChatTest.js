import React, {Component} from 'react';
import { MessagesList } from "../../containers/ChatTest/MessageList"
import { AddMessage } from "../../containers/ChatTest/AddMessage"

class ChatTest extends Component {

    render() {
        return (
            <div id="container">
                <section id="main">
                    <MessagesList />
                    <AddMessage />
                </section>
            </div>
        )
    }
}

export default ChatTest;
