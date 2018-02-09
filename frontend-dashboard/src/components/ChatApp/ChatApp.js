import React, {Component} from 'react';
import styles from './ChatApp.scss';
import {TextInput} from 'reactstrap';
import ReactDOM from 'react-dom';


class ChatApp extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            message: "",
            defaultMessage: "name"
        };
        this.messageValue = this.messageValue.bind(this);
        this.setNewMessage = this.setNewMessage.bind(this);
        this.getMessage = this.getMessage.bind(this);
    }

    // var room = 'PortalChatRoom';

    // webrtc.joinRoom(room);

    componentDidMount() {
        this.webrtc = new SimpleWebRTC({
            localVideoEl: '',
            remoteVideosEl: '',
            autoRequestMedia: false,
            nick: 'Peer'
        });

        console.log("webrtc component mounted");
        this.webrtc.connection.on('message', this.getMessage());
        this.webrtc.on('readyToCall', this.readyToCall);
    }
    componentWillMount () {
        const script = document.createElement("script");

        script.src = "https://simplewebrtc.com/latest-v2.js";
        script.async = true;

        document.body.appendChild(script);
    }

    // Await messages from others


    messageValue(e) {
        console.log("Add message");
        this.setState({
            message: e.target.value
        });

    }

    setNewMessage(e) {
        console.log("set message");
        const defaultMessage = "null";
        this.setState({
            defaultMessage: this.state.message
        });

        e.preventDefault();

    }

    // For Text Chat ------------------------------------------------------------------
    // Await messages from others

    getMessage(data){
        console.log("Received");
        const dataValue = typeof data;
        if(dataValue ==='chat'){
            console.log('chat recieved');
            const message = this.refs.messages;

        }
        // {//     console.log('chat received',data.payload.message);
       // }
    }

    // webrtc.connection.on('message', function(data){
    //     console.log("Received");
    //     if(data.type === 'chat'){
    //         console.log('chat received',data.payload.message);
    //         //append name and message to textarea using id #messages
    //         $('#messages').append('<br>' + data.payload.nick + ': <br>' + data.payload.message + '&#10;');
    //     }
    // });


    // Send a chat message
    //When Send button (id is #send) is clicked


    // $('#send').click(function(){
    //     //Get the message from the text box with #text id
    //     var msg = $('#text').val();
    //     webrtc.config.nick = $('#name').val();
    //     webrtc.sendToAll('chat', {message: msg, nick: webrtc.config.nick});
    //     $('#messages').append('<br>You: <br>' + msg + '&#10;');
    //     //Set the value of text box to null
    //     $('#text').val('');
    // });

    readyToCall() {
        return this.webrtc.joinRoom('room');
    }

    render() {

        return (
            <div className="">
                <input onChange={this.messageValue}
                       ref="msg" placeholder="Enter a message"></input>
                <button onClick={this.setNewMessage} id="send" type="submit">go</button>
                <br/><br/>
                <textarea name="reply" ref="messages" rows="10" cols="50"></textarea>

            </div>
        );
    }
}

export default ChatApp;
