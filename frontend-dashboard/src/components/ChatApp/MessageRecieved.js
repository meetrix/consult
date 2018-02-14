import React, {Component} from 'react';
import styles from './ChatApp.scss';

class MessageRecieved extends Component {
    render() {
        return (
                <div className="row msg_container base_receive">
                    <div className="col-md-2 col-xs-2 avatar">
                        <img src="http://www.bitrebels.com/wp-content/uploads/2011/02/Original-Facebook-Geek-Profile-Avatar-1.jpg" className=" img-responsive " />
                    </div>
                    <div className="col-xs-10 col-md-10">
                        <div className="messages msg_receive">
                            <p id="noter-text-area" ref="textarea">{this.props.message}</p>
                            <time dateTime="2009-11-13T20:00">Timothy • 51 min</time>
                        </div>
                    </div>
                </div>
        )
    }
}

export default MessageRecieved;
