import React, { Component } from 'react';
import { Col } from 'reactstrap';
import PropTypes from 'prop-types';

class BaseBox extends Component {
  render() {
    return (
      <Col className="base-box">

        <Col>

          {this.props.children}

        </Col>
      </Col>
    );
  }
}
BaseBox.propTypes = {
  children: PropTypes.string.isRequired,
};
export default BaseBox;
