import React, {Component} from 'react';
import styles from './ChatApp.scss';

class ChatHidden extends Component {

    render() {
            return (
                <div className="container">
                    <div className="row chat-window col-xs-5 col-md-3" id="chat_window_1" style={{marginLeft: 10}}>
                        <div className="col-xs-12 col-md-12">
                            <div className="panel panel-default">
                                <div className="panel-heading top-bar rounded" style={{backgroundColor: "#5bc0de", height: "7vh", textAlign: 'center'}} >
                                    <h3 className="panel-title"><span className="glyphicon glyphicon-comment"/>
                                        Messages &nbsp;
                                        <div className="btn-group dropup">
                                            <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown" onClick={this.props.action} aria-haspopup="true" aria-expanded="false">
                                            </button>
                                        </div>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
    }
}

export default ChatHidden;
