import React, { Component } from 'react';
import {Row,Col} from 'reactstrap'

import LiveRoomContainer from '../../containers/LiveRoomContainer/LiveRoomContainer'
import ConsultantLiveContainer from '../../containers/ConsultantLiveContainer/ConsultantLiveContainer'
import VideoContainer from '../../containers/VideoContainer/VideoContainer'
import MyConsultantsContainer from '../../containers/MyConsutantsContainer/MyConsultantsContainer'
import ContactConsult from '../../components/Consultants/ContactConsult';
import PropTypes from 'prop-types'
import role from '../../../ProjectConfiguration/role.json'


import PickTimeSlotContainer from '../../containers/PickTimeSlotContainer/PickTimeSlotContainer'
class Dashboard extends Component {

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  render() {

    if(this.props.auth.user.attributes['custom:subRole'] == role.consultee){
      return(
        <Col>
          <Row>
            <h3>Hi {this.capitalizeFirstLetter(this.props.auth.user.username)} !</h3>
          </Row>
          <Row>
            <h6>Let's schedule your class</h6>

          </Row>
          <Row>
            <PickTimeSlotContainer/>
          </Row>
        </Col>
      )
    }
    else{
      return (
        // {/*<Col>*/}
        //   {/*<Row><ContactConsult /></Row>*/}
        // {/*</Col>*/}

        <div className="animated fadeIn">
          <Col>
            <Row className="dash-board-component-wrapper">

              {/*<MyConsultantsContainer/>*/}


            </Row>
            <Row className="dash-board-component-wrapper"><ConsultantLiveContainer/></Row>
            <Row className="dash-board-component-wrapper"><LiveRoomContainer/></Row>
            <Row className="dash-board-component-wrapper"><VideoContainer/></Row>
          </Col>
        </div>

      )
    }

  }

}
Dashboard.propTypes = {
  auth:PropTypes.shape({
    user:PropTypes.shape({
      attributes:PropTypes.shape({
        'custom:subRole':PropTypes.string.isRequired
      })
    })
  })
}
export default Dashboard;
