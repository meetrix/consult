/**
 * Created by supun on 09/02/18.
 */
import { API, Auth } from 'aws-amplify';
import React, { Component } from 'react';
import { Col } from 'reactstrap';
import PickSlotContainer from '../../../containers/PickTimeSlotContainer/PickTimeSlotContainer';


class Test extends Component {
  componentDidMount() {
    Auth.currentSession().then((idToken) => {
      console.log(idToken.idToken.jwtToken);

      const options = {
        headers: {
          Authorization: idToken.idToken.jwtToken,
        },
      };
      console.log(API, options);
      API.get('PetStore', '/pets', options)
        .then((resp) => {
          // this.setState({
          //     data: resp
          // });
          console.log('response is : ', resp);
        })
        .catch(err => console.log(err));
    });
  }
  render() {
    return (
      <Col>
                Dashbord
        {/* <Row className="dash-board-component-wrapper"><MyConsultantsContainer/></Row> */}
        {/* <Row className="dash-board-component-wrapper"><ConsultantLiveContainer/></Row> */}
        {/* <Row className="dash-board-component-wrapper"><LiveRoomContainer/></Row> */}
        {/* <Row className="dash-board-component-wrapper"><VideoContainer/></Row> */}
        {/* <Row><BaseScroll/></Row> */}
        <PickSlotContainer />
      </Col>

    );
  }
}
export default Test;
