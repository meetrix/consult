import React, { Component } from 'react';
import {Container, Row, Col, CardGroup, Card, CardBody,CardFooter,  Button, Input, InputGroup, InputGroupAddon} from 'reactstrap';

class FileShare extends Component {

    render() {
        const divStyle={
            position: "absolute",
            bottom: "10%",
            right: "25%",
            zIndex:"10"
        };

        return (

            <div>
                <script src="https://simplewebrtc.com/latest-v2.js"></script>
                <div id="classControlContainer" className="" style={divStyle}>
                    <button id="myBtn" className="btn btn-warning rounded">File Share</button>
                    <div id="myModal" className="modal">
                        <div className="modal-content">
                            <span className="closing">&times;</span>
                            <div id="remotes">
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default FileShare;