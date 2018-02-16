import React, { Component } from 'react';
import ChatApp from "../../../components/ChatApp";
import FileShare from "../../../components/FileShare";
import WebRTC from "../../../components/WebRTC"
import {Container, Row, Col, CardGroup, Card, CardBody,CardFooter,  Button, Input, InputGroup, InputGroupAddon} from 'reactstrap';
// import WebRTC from "../../../components/WebRTC";


class Session extends Component {

    render() {
        return (

            <div>

                <iframe src="https://whiteboard.siplo.lk"
                        height={window.innerHeight}
                        width={window.innerWidth} />
                <WebRTC/>
                <FileShare/>
                <ChatApp/>

            </div>
        )
    }
}

export default Session;
