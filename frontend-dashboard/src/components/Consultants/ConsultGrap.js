/**
 * Created by supun on 15/02/18.
 */
import React,{Component} from 'react';
import {Col,Row} from 'reactstrap';

class ConsultGrap extends Component{



    render(){
        return(
            <Col>
                <Row>
                    <Col><i className="icon-phone icons font-2xl d-block mt-4"></i></Col>
                    <Col><i className="icon-speech icons font-2xl d-block mt-4"></i></Col>
                    <Col><i className="icon-calendar icons font-2xl d-block mt-4"></i></Col>
                </Row>

            </Col>
        );
    }

}

export default ConsultGrap;