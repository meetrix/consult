import React, {Component} from 'react';
import BaseBox from "../BaseBox/BaseBox";
import ConsultGrap from "./ConsultGrap";
import {Col,Row} from 'reactstrap';
import PropTypes from 'prop-types';

class ConsultantLive extends Component{

    render(){
        return(

            <BaseBox>
                <Row className="username-consult-live">
                    <p style={{margin:"auto"}}>{this.props.consultant.username}</p>
                </Row>

                <Row className="consultant-image">
                    <img   alt="Avatar"  src={this.props.consultant.image}/>
                </Row>
                <Row className="consult-grap-consult-live">
                    <ConsultGrap/>
                </Row>

            </BaseBox>


        );
    }
}
ConsultantLive.propTypes={
    consultant:PropTypes.object.isRequired,

}
export default ConsultantLive;
