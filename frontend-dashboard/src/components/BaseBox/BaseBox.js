import React, { Component } from 'react';
import { Col } from 'reactstrap';


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

export default BaseBox;
