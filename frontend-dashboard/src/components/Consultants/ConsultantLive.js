import React, {Component} from 'react';
import BaseBox from "../BaseBox/BaseBox";
import ConsultGrap from "./ConsultGrap";
import {Col,Row} from 'reactstrap';

class ConsultantLive extends Component{
    render(){
        return(

            <BaseBox>
                <Row className="username-consult-live">
                    <p>{this.props.username}</p>
                </Row>

                <Row className="consultant-image">
                    <img   alt="Avatar"  src="img/avatars/1.jpg"/>
                </Row>
                <Row className="consult-grap-consult-live">
                    <ConsultGrap/>
                </Row>

            </BaseBox>


        );
    }
}

export default ConsultantLive;
