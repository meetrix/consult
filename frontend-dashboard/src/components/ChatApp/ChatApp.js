import React, {Component} from 'react';
import styles from './ChatApp.scss';
import ChatShown from "./ChatShown";
import ChatHidden from "./ChatHidden";

class ChatApp extends Component {

    constructor(props) {
        super(props);
        this._onClick.bind(this);
        this.state = {
            showReply: true
        }
    }
    _onClick(e){
        this.setState({showReply: !this.state.showReply});
    }

    render() {
        if(this.state.showReply) {
            return (
                <div >
                    <ChatShown action={this._onClick.bind(this)}/>
                </div>
            );
        }else{
            return (
                <div>
                    <ChatHidden action={this._onClick.bind(this)}/>
                </div>
            );
        }
    }
}

export default ChatApp;
