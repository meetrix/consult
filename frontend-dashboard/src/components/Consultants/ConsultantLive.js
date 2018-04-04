import React, { Component } from 'react';
import { Row } from 'reactstrap';
import PropTypes from 'prop-types';
import BaseBox from '../BaseBox/BaseBox';
import ConsultGrap from './ConsultGrap';


class ConsultantLive extends Component {
  render() {
    return (

      <BaseBox>
        <Row className="username-consult-live">
          <p style={{ margin: 'auto' }}>{this.props.consultant.username}</p>
        </Row>

        <Row className="consultant-image">
          <img alt="Avatar" src={this.props.consultant.image} />
        </Row>
        <Row className="consult-grap-consult-live">
          <ConsultGrap />
        </Row>

      </BaseBox>


    );
  }
}
ConsultantLive.propTypes = {
  consultant: PropTypes.shape.isRequired,

};
export default ConsultantLive;
