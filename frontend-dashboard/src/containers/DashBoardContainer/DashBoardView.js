//core library
import React, { Component } from 'react';
import {Row,Col,Button,Form,FormGroup,Input,Label} from 'reactstrap';

//container
import LiveRoomContainer from '../../containers/LiveRoomContainer/LiveRoomContainer';
import ConsultantLiveContainer from '../../containers/ConsultantLiveContainer/ConsultantLiveContainer';
import VideoContainer from '../../containers/VideoContainer/VideoContainer';
import PropTypes from 'prop-types';
import role from '../../../ProjectConfiguration/role.json';
import PickTimeSlotContainer from '../../containers/PickTimeSlotContainer/PickTimeSlotContainer';

class DashBoardView extends Component {


  constructor(props){
    super(props)
    this.state={
      selectConsultant:''

    }
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      consultantId: ''
    };
  }

  _selectConsultant(event){
    this.setState({consultantId:event.target.value})
  }
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  _viewTimeSlot(){
    if(this.props.auth.user.relatedUsers!=null){

      if(this.state.consultantId!=''){

        this.props.actions.getFreeEventFromConsultant({id:this.state.consultantId})
      }
      else {

        this.props.actions.getFreeEventFromConsultant({id:this.props.auth.user.relatedUsers[0].id})
      }

    }


  }
  render() {

    let consultantSelectElm =
      <Row>
        <Form >
          <FormGroup>
            <Label for="exampleSelectMulti">Select Multiple</Label>
            <Input type="select"  onChange={this._selectConsultant.bind(this)} name="selectMulti" id="exampleSelectMulti" >

              {this.props.auth.user.relatedUser !=null ? this.props.auth.user.relatedUsers.map((consultant,index)=>

                <option value={consultant.id} key={index}>{consultant.email} </option>
              ):null}
            </Input>
          </FormGroup>
          <Button onClick={this._viewTimeSlot.bind(this)}>View Free Slot</Button>
        </Form>


      </Row>
    let view ;
    if(this.props.auth.user.role== role.consultee){
      view = <Col>

        <Row>
          <h3>Hi {this.capitalizeFirstLetter(this.props.auth.user.firstName)} !</h3>
        </Row>
        <Row>
          <h6>Let's schedule your class</h6>

        </Row>
        <Row>
          <PickTimeSlotContainer/>
        </Row>
      </Col>
    }
    else if(this.props.auth.user.role == role.consultant){
      view = <div className="animated fadeIn">
        <Col>
          <Row className="dash-board-component-wrapper">

            {/*<MyConsultantsContainer/>*/}


          </Row>
          <Row className="dash-board-component-wrapper"><ConsultantLiveContainer/></Row>
          <Row className="dash-board-component-wrapper"><LiveRoomContainer/></Row>
          <Row className="dash-board-component-wrapper"><VideoContainer/></Row>
        </Col>
      </div>
    }
    return(

      <Col>
        <Row>{consultantSelectElm}</Row>
        <Row>{view}</Row>
      </Col>
    );



  }

}

DashBoardView.propTypes = {
  auth:PropTypes.shape({
    user:PropTypes.shape({
      role:PropTypes.string,
      relatedUser:PropTypes.array,
    })
  }),
  actions:PropTypes.object.isRequired
}
export default DashBoardView;
