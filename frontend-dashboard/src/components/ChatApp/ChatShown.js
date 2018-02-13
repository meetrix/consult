import React, {Component} from 'react';
import styles from './ChatApp.scss';
import MessageSent from "./MessageSent";
import MessageRecieved from "./MessageRecieved";

class ChatShown extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: '',
            chat: '',
            users:[],
            showComponent: false,
        };
        // this.addVideo = this.addVideo.bind(this);
        // this.removeVideo = this.removeVideo.bind(this);
        this.readyToCall = this.readyToCall.bind(this);
        };

    componentDidMount(){
        this.webrtc = new SimpleWebRTC({
            localVideoEl: '',
            remoteVideosEl: '',
            autoRequestMedia: true,
            // url: 'https://simplewebrtc.com/demo.html?test'
        });

        // console.log("webrtc component mounted");
        // this.webrtc.on('videoAdded', this.addVideo);
        // this.webrtc.on('videoRemoved', this.removeVideo);

        this.webrtc.on('readyToCall', this.readyToCall);
        this.webrtc.connection.on('message', function(data){
            if(data.type==='chat') {
                this.setState({ chat: data.payload.message });
                console.log('Received: ' + data.payload.message);
            }
        }.bind(this));
    }


    addVideo(video, peer) {
        console.log('video added', peer);
        //  console.log(this.refs.remotes);
        const remotes = ReactDOM.findDOMNode(this.refs.remotes);
        console.log(remotes);
        if (remotes) {
            const container = document.createElement('div');
            container.className = 'videoContainer';
            container.id = 'container_' + this.webrtc.getDomId(peer);
            container.appendChild(video);
            // suppress contextmenu
            video.oncontextmenu = function() {
                return false;
            };
            console.log(container);
            remotes.appendChild(container);
        }
    }

    removeVideo(video, peer) {
        console.log('video removed ', peer);
        const remotes = ReactDOM.findDOMNode(this.refs.remotes);
        const el = document.getElementById(peer ? 'container_' +this.webrtc.getDomId(peer) : 'localScreenContainer');
        if (remotes && el) {
            remotes.removeChild(el);
        }
    }

    readyToCall() {
        console.log("Ready Call");
        return this.webrtc.joinRoom('PortalChatRoom');
    }

    connect() {
        console.log("connected");
    }

    disconnect() {
        console.log("disconnected");
    }

    _handleChange(e) {
        this.setState({ message: e.target.value });
    }

    _handleClick(e){
        const message = this.state.message;
        this.setState({
            chat: message ,
            showComponent: true
        });
        console.log('Sent: ' +message);
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
                                <div>
                                    {this.state.showComponent ? <MessageSent/> : <MessageRecieved/>}
                                </div>
                                    {/*<div className="panel-body msg_container_base" style={{backgroundColor: "#e3f2fd", height: "25vh" }}>*/}
                                        {/*<div className="row msg_container base_sent">*/}
                                            {/*<div className="col-xs-10 col-md-10">*/}
                                                {/*<div className="messages msg_sent">*/}
                                                    {/*<input id="noter-text-area" refs="textarea" value={this.state.chat}></input>*/}
                                                    {/*<time dateTime="2009-11-13T20:00">Timothy • 51 min</time>*/}
                                                {/*</div>*/}
                                            {/*</div>*/}
                                            {/*<div className="col-md-2 col-xs-2 avatar">*/}
                                                {/*<img*/}
                                                    {/*src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg"*/}
                                                    {/*className=" img-responsive "/>*/}
                                            {/*</div>*/}
                                        {/*</div>*/}
                                    {/*</div>*/}
                                </div>
                                <div className="panel-footer">
                                    <div className="input-group">
                                        <input id="btn-input" type="text" className="form-control input-sm chat_input" onChange={this._handleChange.bind(this)}
                                               placeholder="Write your message here..."/>

                                        <span className="input-group-btn">
                                            <button className="btn btn-primary btn-sm" id="btn-chat" onClick={this._handleClick.bind(this)}>Send</button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            );
    }
}

export default ChatShown;
