import React, {Component} from 'react';

class Message extends Component {
    render() {
        return (
            <div className="panel-body msg_container_base" style={{backgroundColor: "#e3f2fd", height: "25vh" }}>
                <div className="row msg_container base_sent">
                    <div className="col-xs-10 col-md-10">
                        <div className="messages msg_sent">
                            <input id="noter-text-area" refs="textarea"></input>
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
        )
    }
}

export default Message;
