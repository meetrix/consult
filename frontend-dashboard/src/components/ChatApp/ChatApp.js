import React, {Component} from 'react';
import styles from './ChatApp.scss';
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
                <div className="container">
                    <div className="row chat-window col-xs-5 col-md-3" id="chat_window_1" style={{marginLeft: 10}}>
                        <div className="col-xs-12 col-md-12">
                            <div className="panel panel-default">
                                <div className="panel-heading top-bar rounded" style={{backgroundColor: "#5bc0de", height: "7vh", textAlign: 'center'}}>
                                    <div className="col-md-12">
                                        <h3 className="panel-title"><span className="glyphicon glyphicon-comment"/>
                                            Messages&nbsp;
                                            <div className="btn-group dropdown">
                                                <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown" onClick={this._onClick.bind(this)} aria-haspopup="true" aria-expanded="false">
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
                                        <div className="col-md-10 col-xs-10">
                                            <div className="messages msg_sent">
                                                <p>that mongodb thing looks good, huh?
                                                    tiny master db, and huge document store</p>
                                                <time dateTime="2009-11-13T20:00">Timothy • 51 min</time>
                                            </div>
                                        </div>
                                        <div className="col-md-2 col-xs-2 avatar">
                                            <img
                                                src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg"
                                                className=" img-responsive "/>
                                        </div>
                                    </div>
                                    <div className="row msg_container base_receive">
                                        <div className="col-md-2 col-xs-2 avatar">
                                            <img
                                                src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg"
                                                className=" img-responsive "/>
                                        </div>
                                        <div className="col-md-10 col-xs-10">
                                            <div className="messages msg_receive">
                                                <p>that mongodb thing looks good, huh?
                                                    tiny master db, and huge document store</p>
                                                <time dateTime="2009-11-13T20:00">Timothy • 51 min</time>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row msg_container base_receive">
                                        <div className="col-md-2 col-xs-2 avatar">
                                            <img
                                                src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg"
                                                className=" img-responsive "/>
                                        </div>
                                        <div className="col-xs-10 col-md-10">
                                            <div className="messages msg_receive">
                                                <p>that mongodb thing looks good, huh?
                                                    tiny master db, and huge document store</p>
                                                <time dateTime="2009-11-13T20:00">Timothy • 51 min</time>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row msg_container base_sent">
                                        <div className="col-xs-10 col-md-10">
                                            <div className="messages msg_sent">
                                                <p>that mongodb thing looks good, huh?
                                                    tiny master db, and huge document store</p>
                                                <time dateTime="2009-11-13T20:00">Timothy • 51 min</time>
                                            </div>
                                        </div>
                                        <div className="col-md-2 col-xs-2 avatar">
                                            <img
                                                src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg"
                                                className=" img-responsive "/>
                                        </div>
                                    </div>
                                    <div className="row msg_container base_receive">
                                        <div className="col-md-2 col-xs-2 avatar">
                                            <img
                                                src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg"
                                                className=" img-responsive "/>
                                        </div>
                                        <div className="col-xs-10 col-md-10">
                                            <div className="messages msg_receive">
                                                <p>that mongodb thing looks good, huh?
                                                    tiny master db, and huge document store</p>
                                                <time dateTime="2009-11-13T20:00">Timothy • 51 min</time>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row msg_container base_sent">
                                        <div className="col-md-10 col-xs-10 ">
                                            <div className="messages msg_sent">
                                                <p>that mongodb thing looks good, huh?
                                                    tiny master db, and huge document store</p>
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
                                               placeholder="Write your message here..."/>
                                        <span className="input-group-btn">
                                            <button className="btn btn-primary btn-sm" id="btn-chat">Send</button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
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
