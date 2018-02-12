import React, {Component} from 'react';
import ChatShown from "./ChatShown";
import ChatHidden from "./ChatHidden";

class ChatApp extends React.Component {

    constructor(props) {
        super(props);
        this._onClick.bind(this);
        this.state = {
            showMessages: true
        }
    }
    _onClick(e){
        this.setState({showMessages: !this.state.showMessages});
    }

    render() {

        if(this.state.showMessages) {
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
