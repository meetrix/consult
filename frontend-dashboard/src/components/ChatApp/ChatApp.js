import React, {Component} from 'react';
import ChatShown from "./ChatShown";
import ChatHidden from "./ChatHidden";

class ChatApp extends React.Component {

    constructor(props) {
        super(props);
        this._onClick.bind(this);
        this.state = {
            showMessages: false
        }
    }
    _onClick(e){
        this.setState({showMessages: !this.state.showMessages});
    }

    render() {

        if(this.state.showMessages) {
            return (
                    <ChatShown action={this._onClick.bind(this)}/>
            );
        }else{
            return (
                    <ChatHidden action={this._onClick.bind(this)}/>
            );
        }

    }
}

export default ChatApp;
