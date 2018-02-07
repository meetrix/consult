import React, {Component} from 'react';
import styles from './ChatApp.scss';
import {Container, Row, Col, CardGroup, Card, CardBody,CardFooter,  Button, Input, InputGroup, InputGroupAddon} from 'reactstrap';

class ChatApp extends Component {

    render() {
        return (
                <div className="container" style={{marginLeft: 1400}}>
                    <div className="row chat-window col-xs-5 col-md-3" id="chat_window_1" style={{marginLeft: 10}}>
                        <div className="col-xs-12 col-md-12">
                            <div className="panel panel-default">
                                <div className="panel-heading top-bar">
                                    <div className="col-md-8 col-xs-8">
                                        <h3 className="panel-title"><span className="glyphicon glyphicon-comment" /> Chat - Miguel</h3>
                                    </div>
                                    <div className="col-md-4 col-xs-4" style={{textAlign: 'right'}}>
                                        <a href="#"><span id="minim_chat_window" className="glyphicon glyphicon-minus icon_minim" /></a>
                                        <a href="#"><span className="glyphicon glyphicon-remove icon_close" data-id="chat_window_1" /></a>
                                    </div>
                                </div>
                                <div className="panel-body msg_container_base">
                                    <div className="row msg_container base_sent">
                                        <div className="col-md-10 col-xs-10">
                                            <div className="messages msg_sent">
                                                <p>that mongodb thing looks good, huh?
                                                    tiny master db, and huge document store</p>
                                                <time dateTime="2009-11-13T20:00">Timothy • 51 min</time>
                                            </div>
                                        </div>
                                        <div className="col-md-2 col-xs-2 avatar">
                                            <img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" className=" img-responsive " />
                                        </div>
                                    </div>
                                    <div className="row msg_container base_receive">
                                        <div className="col-md-2 col-xs-2 avatar">
                                            <img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" className=" img-responsive " />
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
                                            <img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" className=" img-responsive " />
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
                                            <img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" className=" img-responsive " />
                                        </div>
                                    </div>
                                    <div className="row msg_container base_receive">
                                        <div className="col-md-2 col-xs-2 avatar">
                                            <img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" className=" img-responsive " />
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
                                            <img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" className=" img-responsive " />
                                        </div>
                                    </div>
                                </div>
                                <div className="panel-footer">
                                    <div className="input-group">
                                        <input id="btn-input" type="text" className="form-control input-sm chat_input" placeholder="Write your message here..." />
                                        <span className="input-group-btn">
                                            <button className="btn btn-primary btn-sm" id="btn-chat">Send</button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="btn-group dropup">
                        <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                            <span className="glyphicon glyphicon-cog" />
                            <span className="sr-only">Toggle Dropdown</span>
                        </button>
                        <ul className="dropdown-menu" role="menu">
                            <li><a href="#" id="new_chat"><span className="glyphicon glyphicon-plus" /> Novo</a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-list" /> Ver outras</a></li>
                            <li><a href="#"><span className="glyphicon glyphicon-remove" /> Fechar Tudo</a></li>
                            <li className="divider" />
                            <li><a href="#"><span className="glyphicon glyphicon-eye-close" /> Invisivel</a></li>
                        </ul>
                    </div>
                </div>
        );
    }
}

export default ChatApp;
