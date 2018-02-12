import React, {Component} from 'react';
import styles from './ChatApp.scss';

class ChatShown extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: '',
            chat: '',
            users:[]
        };
        this.readyToCall = this.readyToCall.bind(this);
    }

    componentDidMount(){
        this.webrtc = new SimpleWebRTC({
            localVideoEl: '',
            remoteVideosEl: '',
            autoRequestMedia: false,
        });

        console.log("webrtc component mounted");
        this.webrtc.on('readyToCall', this.readyToCall);
        this.webrtc.connection.on('message', function(data){
            if(data.type==='chat') {
                this.setState({ chat: data.payload.message });
                console.log('Received: ' + data.payload.message);
            }
        }.bind(this));
    }

    readyToCall() {
        console.log('joined TEST');
        return this.webrtc.joinRoom('test');
    }


    _handleChange(e) {
        this.setState({ message: e.target.value });
    }

    _handleClick(e){
        const message = this.state.message;
        this.setState({ chat: message });
        console.log('clicked: ' +message);
        this.webrtc.sendToAll('chat', {message: message});
    }

    render() {
            return (
                <div className="container">
                    <div className="row chat-window col-xs-5 col-md-3" id="chat_window_1" style={{marginLeft: 10}}>
                        <div className="col-xs-12 col-md-12">
                            <div className="panel panel-default">
                                <div className="panel-heading top-bar rounded" style={{backgroundColor: "#5bc0de", height: "7vh", textAlign: 'center'}}>
                                    <div className="col-md-12">
                                        <h3 className="panel-title"><span className="glyphicon glyphicon-comment"/>
                                            Messages&nbsp;
                                            <div className="btn-group dropdown">
                                                <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown" onClick={this.props.action} aria-haspopup="true" aria-expanded="false">
                                                </button>
                                            </div>
                                        </h3>
                                    </div>
                                    <div className="col-md-4 col-xs-4" style={{textAlign: 'right'}}>
                                        <a href="#"><span id="minim_chat_window" className="close"/></a>
                                        <a href="#"><span className="close" data-id="chat_window_1"/></a>
                                    </div>
                                </div>
                                <div className="panel-body msg_container_base" style={{backgroundColor: "#e3f2fd", height: "25vh" }}>

                                    <div className="row msg_container base_sent">
                                        <div className="col-xs-10 col-md-10">
                                            <div className="messages msg_sent">
                                                <input id="noter-text-area" refs="textarea" value={this.state.chat}></input>
                                                <time dateTime="2009-11-13T20:00">Timothy • 51 min</time>
                                            </div>
                                        </div>
                                        <div className="col-md-2 col-xs-2 avatar">
                                            <img
                                                src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg"
                                                className=" img-responsive "/>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel-footer">
                                    <div className="input-group">
                                        <input id="btn-input" type="text" className="form-control input-sm chat_input"
                                               placeholder="Write your message here..." onChange={this._handleChange.bind(this)}/>
                                        <span className="input-group-btn">
                                            <button className="btn btn-primary btn-sm" id="btn-chat" onClick={this._handleClick.bind(this)}>Send</button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
    }
}

export default ChatShown;
