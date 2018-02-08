import React, { Component } from 'react';
import ChatApp from "../../../components/ChatApp";
import FileShare from "../../../components/FileShare";
import {Container, Row, Col, CardGroup, Card, CardBody,CardFooter,  Button, Input, InputGroup, InputGroupAddon} from 'reactstrap';


class Session extends Component {

    render() {
        return (

            <div>
                <iframe src="https://whiteboard.siplo.lk"
                        height={window.innerHeight}
                        width={window.innerWidth} />
                <FileShare/>
                <ChatApp/>

            </div>
        )
    }
}

export default Session;
