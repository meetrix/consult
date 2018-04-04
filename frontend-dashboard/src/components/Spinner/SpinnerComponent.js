/**
 * Created by supun on 07/02/18.
 */

import React, { Component } from 'react';
import { Col } from 'reactstrap';
import Spinner from 'react-spinkit';

class SpinnerComponent extends Component {
  render() {
    return (
      <Col><Spinner name="line-scale-party" color="aqua" /></Col>

    );
  }
}
export default SpinnerComponent;
