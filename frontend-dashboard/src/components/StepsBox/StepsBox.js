import React, {Component} from 'react';
import {Row, Col, Fragment} from 'reactstrap';

class StepsBox extends Component{

    render(){

        return(
            <div>

                <Col xs="12" sm="4" md="4" >
                    <Row>
                        <Col xs="6" sm="6" md="6">
                            Some Text
                        </Col>
                        <Col xs="6" sm="6" md="6">
                            Some Text
                        </Col>
                    </Row>
                </Col>

                <Col xs="12" sm="4" md="4" >
                    <Row>
                        <Col xs="6" sm="6" md="6">
                            Some Text
                        </Col>
                        <Col xs="6" sm="6" md="6">
                            Some Text
                        </Col>
                    </Row>
                </Col>

                <Col xs="12" sm="4" md="4" >
                    <Row>
                        <Col xs="6" sm="6" md="6">
                            Some Text
                        </Col>
                        <Col xs="6" sm="6" md="6">
                            Some Text
                        </Col>
                    </Row>
                </Col>

            </div>
        );
    }
}

export default StepsBox;