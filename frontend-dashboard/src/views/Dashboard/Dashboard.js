import React, { Component } from 'react';
import {Row,Col} from 'reactstrap'

import LiveRoomContainer from '../../containers/LiveRoomContainer/LiveRoomContainer'
import ConsultantLiveContainer from '../../containers/ConsultantLiveContainer/ConsultantLiveContainer'
import VideoContainer from '../../containers/VideoContainer/VideoContainer'
import MyConsultantsContainer from '../../containers/MyConsutantsContainer/MyConsultantsContainer'
import ContactConsult from '../../components/Consultants/ContactConsult';

class Dashboard extends Component {

  render() {
    return (
        // {/*<Col>*/}
        //   {/*<Row><ContactConsult /></Row>*/}
        // {/*</Col>*/}

      <div className="animated fadeIn">
        <Col>
          <Row className="dash-board-component-wrapper">

              <MyConsultantsContainer/>


          </Row>
          <Row className="dash-board-component-wrapper"><ConsultantLiveContainer/></Row>
          <Row className="dash-board-component-wrapper"><LiveRoomContainer/></Row>
          <Row className="dash-board-component-wrapper"><VideoContainer/></Row>
        </Col>
      </div>

    )
  }
}

export default Dashboard;
