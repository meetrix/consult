import React, {Component} from 'react';
import {Col,Row} from 'reactstrap';



class BaseBox extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Col className="base-box">

                <Col>

                    {this.props.children}

                </Col>
            </Col>
        )
    }
}

export default BaseBox;