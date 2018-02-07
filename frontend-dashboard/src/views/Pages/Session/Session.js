import React, { Component } from 'react';
import {Container, Row, Col, CardGroup, Card, CardBody,CardFooter,  Button, Input, InputGroup, InputGroupAddon} from 'reactstrap';

class Session extends Component {

    render() {
        return (
            <div>
                <iframe src="https://whiteboard.siplo.lk"
                        height={window.innerHeight}
                        width={window.innerWidth} />
                <button id="myBtn" class="btn btn-default">File Share</button>
            </div>
        )
    }
}

export default Session;
