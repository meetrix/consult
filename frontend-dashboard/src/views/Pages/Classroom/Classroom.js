import React, {Component} from 'react';
import {Container, Row, Col, CardGroup, Card, CardBody,CardFooter,  Button, Input, InputGroup, InputGroupAddon} from 'reactstrap';

class Classroom extends Component {

    render() {
            return (
                <div className="app flex-row align-items-center">
                        <iframe src="https://whiteboard.siplo.lk/whiteboard/" height='inherit' overflow="hidden"  width='100%'/>
                </div>
            );
    }
}

export default Classroom;
