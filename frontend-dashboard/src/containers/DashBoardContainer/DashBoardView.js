// core library
import React, { Component } from 'react';
import { Row, Col, Button, Form, FormGroup, Input, Label } from 'reactstrap';
import PropTypes from 'prop-types';

// container
import LiveRoomContainer from '../../containers/LiveRoomContainer/LiveRoomContainer';
import ConsultantLiveContainer from '../../containers/ConsultantLiveContainer/ConsultantLiveContainer';
import ConsultantsContainer from '../../containers/ConsultantsContainer/ConsultantsContainer';
import VideoContainer from '../../containers/VideoContainer/VideoContainer';
import PickTimeSlotContainer from '../../containers/PickTimeSlotContainer/PickTimeSlotContainer';
//constant
import role from '../../../ProjectConfiguration/role.json';

class DashBoardView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      consultantId: undefined,
    };
    this._viewTimeSlot = this._viewTimeSlot.bind(this);
    this._selectConsultant = this._selectConsultant.bind(this);
  }
  componentDidMount() {
    // get user next event
    if (this.props.auth.user.id !== undefined) {
      this.props.actions.getNextEvent({ id: this.props.auth.user.id });
    }
    if(this.props.auth.user.relatedUsers ===undefined){
        this.props.actions.getSuggestConsultantList({id:this.props.auth.user.id,consultantRole:'teacher'});
    }
  }

  _selectConsultant(event) {
    this.setState({ consultantId: event.target.value });
  }

  _capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + this.string.slice(1);
  }

  _viewTimeSlot() {
    if (this.props.auth.user.relatedUsers != null) {
      if (this.state.consultantId === undefined) {
        /* eslint max-len : 0 */
        this.props.actions.getFreeEventFromConsultant({ id: this.props.auth.user.relatedUsers[0].id });
      } else {
        this.props.actions.getFreeEventFromConsultant({ id: this.state.consultantId });
      }
    }
  }
  render() {
    let consultantSelectElm = null;
    let view = null;
    let consultantList = null;
    if(this.props.auth.user.role=== role.consultee ){
      if(!(this.props.scheduler.events ===undefined || this.props.scheduler.events ===null || this.props.scheduler.events.length ===0) ) {
        view =
          (
            <Col>
              <Row>
                <h3>Hi {this._capitalizeFirstLetter(this.props.auth.user.firstName)} !</h3>
              </Row>
              <Row>
                <h6> {'Let\'s'} schedule your class</h6>
              </Row>
              <Row>
                <PickTimeSlotContainer />
              </Row>
            </Col>
          );
      }
      if(this.props.auth.user.relatedUsers!==undefined){
          
          consultantSelectElm =
          <Row>
            <Form >
              <FormGroup>
                <Label for="exampleSelectMulti">Select Teacher For View Free Time Slot</Label>
                <Input type="select"  onChange={this._selectConsultant.bind(this)} name="selectMulti" id="exampleSelectMulti" >

                  {this.props.auth.user.relatedUsers !=null ? this.props.auth.user.relatedUsers.map((consultant,index)=>

                    <option value={consultant.id} key={index}>{consultant.id} </option>
                  ):null}
                </Input>
              </FormGroup>
              <Button onClick={this._viewTimeSlot.bind(this)}>View Free Slot</Button>
            </Form>


          </Row>
      }
      else{
        consultantList = 
        <div className="animated fadeIn">
          <Col>
            <Alert color="warning" >Suggest Consulants</Alert>
            <Row className="dash-board-component-wrapper"> <ConsultantsContainer/> </Row>
            {/* <Alert>Suggest Consulants</Alert>
            <Row className="dash-board-component-wrapper"><ConsultantLiveContainer/></Row>
            <Row className="dash-board-component-wrapper"><LiveRoomContainer/></Row>
            <Row className="dash-board-component-wrapper"><VideoContainer/></Row> */}
          </Col>
      </div>
      }
    }
    else if(this.props.auth.user.role === role.consultant){
      view =
        (
          <div className="animated fadeIn">
            <Col>
              <Row className="dash-board-component-wrapper">
                {/* <MyConsultantsContainer/> */}
              </Row>
              <Row className="dash-board-component-wrapper"><ConsultantLiveContainer /></Row>
              <Row className="dash-board-component-wrapper"><LiveRoomContainer /></Row>
              <Row className="dash-board-component-wrapper"><VideoContainer /></Row>
            </Col>
          </div>
        );
    }
    return (

      <Col>
        <Row>{consultantSelectElm}</Row>
        <Row>{view}</Row>
        {consultantList}
      </Col>
    );
  }
}

DashBoardView.propTypes = {
  auth: PropTypes.shape({
    user: PropTypes.shape({
      id: PropTypes.string,
      role: PropTypes.string,
      firstName: PropTypes.string,
      relatedUsers: PropTypes.arrayOf.isRequired,

    }),
  }).isRequired,
  scheduler: PropTypes.shape().isRequired,
  actions: PropTypes.shape().isRequired,
};
export default DashBoardView;
