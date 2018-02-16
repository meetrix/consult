import React, { Component } from 'react';
import ChatApp from "../../../components/ChatApp";
import FileShare from "../../../components/FileShare";
import Video from "../../../components/Video";
import {Container, Row, Col, CardGroup, Card, CardBody,CardFooter,  Button, Input, InputGroup, InputGroupAddon} from 'reactstrap';
// import WebRTC from "../../../components/WebRTC";


class Session extends Component {

    render() {
        return (

            <div>

                <iframe src="https://whiteboard.siplo.lk"
                        height={window.innerHeight}
                        width={window.innerWidth} />
                <Video/>
                <FileShare/>
                <ChatApp/>

            </div>
        )
    }
}

export default Session;
