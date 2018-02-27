import React, {Component} from 'react';
import styles from './ChatApp.scss';

class ChatHidden extends Component {
    render() {
            return (
                <div className="container">
                    <div className="row chat-window col-xs-5 col-md-3" id="chat_window_1">
                         <div className="btn-group dropup">
                             <button type="button" className="btn btn-info dropdown-toggle rounded" data-toggle="dropdown" onClick={this.props.action} aria-haspopup="true" aria-expanded="false">
                             Messages
                             </button>
                         </div>
                    </div>
                </div>
            );
    }
}

export default ChatHidden;
