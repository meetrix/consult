import React, { Component } from 'react';
import {Row,Col} from 'reactstrap'

import LiveRoomContainer from '../../containers/LiveRoomContainer/LiveRoomContainer'
class Dashboard extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <Col>
          Dashbord
          <Row>online consults</Row>
          <Row><LiveRoomContainer/></Row>
          <Row>video</Row>
        </Col>
      </div>
    )
  }
}

export default Dashboard;
