import React, {Component} from 'react';
import styles from './ChatApp.scss';
import ReactDOM from 'react-dom';

class ChatApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {value: ''};
        this.messageChange = this.messageChange.bind(this);
        this.messageSubmit = this.messageSubmit.bind(this);
    }

    componentDidMount() {
        this.webrtc = new SimpleWebRTC({
            localVideoEl: '',
            remoteVideosEl: '',
            autoRequestMedia: false,
            nick: 'Peer'
        });
        console.log("webrtc component mounted");
        this.webrtc.connection.on('message', this.getMessage());
    }

    //get input value
    messageChange(event) {
        this.setState({value: event.target.value});
        console.log("Set");
    }

    //submit message value
    messageSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        console.log("Submit");
        event.preventDefault();
    }

    //For Text Chat ------------------------------------------------------------------
    // Await messages from others

    getMessage(data) {
        console.log("Received");
        const dataValue = typeof data;
        if (dataValue === 'chat') {
            console.log('chat recieved');
            //append name and message to textarea using id #messages
            const message = this.refs.messages;
            const new_message = message +

        }
    }
    /*webrtc.connection.on('message', function(data){
        console.log("Received");
        if(data.type === 'chat'){
            console.log('chat received',data.payload.message);
            //append name and message to textarea using id #messages
            $('#messages').append('<br>' + data.payload.nick + ': <br>' + data.payload.message + '&#10;');
        }
    });*/


    render() {
        return (
            <div className="">
                <h3>Portal Chat Room</h3>
                <form onSubmit={this.messageSubmit}>
                    <label>Message:
                        <input type="text" value={this.state.value} onChange={this.messageChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <textarea name="reply" refs="messages" rows="10" cols="50"></textarea>
            </div>
        );
    }
}

export default ChatApp;
