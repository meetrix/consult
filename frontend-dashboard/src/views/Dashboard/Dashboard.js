import React, { Component } from 'react';
import {Row,Col,Form,FormGroup,Input,Label} from 'reactstrap'

import LiveRoomContainer from '../../containers/LiveRoomContainer/LiveRoomContainer'
import ConsultantLiveContainer from '../../containers/ConsultantLiveContainer/ConsultantLiveContainer'
import VideoContainer from '../../containers/VideoContainer/VideoContainer'
import MyConsultantsContainer from '../../containers/MyConsutantsContainer/MyConsultantsContainer'
import ContactConsult from '../../components/Consultants/ContactConsult';
import PropTypes from 'prop-types'
import role from '../../../ProjectConfiguration/role.json'


import PickTimeSlotContainer from '../../containers/PickTimeSlotContainer/PickTimeSlotContainer'
class Dashboard extends Component {


  constructor(props){
    super(props)
    this.state={
      selectConsultant:''

    }
  }

  componentDidMount(){


  }
  _selectConsultant(event){
    console.log(event)
  }
  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  render() {

    let consultantSelectElm =
      <Row>
        <Form>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input onChange={this._selectConsultant.bind(this)} type="select" name="select" id="exampleSelect" >
            {this.props.auth.user.initData ? null :this.props.auth.user.initData.relatedUser.map((consultant,index)=>{
            <option  key={index}>consultant.email</option>
          })}
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        </Form>
      </Row>
    if(this.props.auth.user.attributes['custom:subRole'] == role.consultee){
      return(
        <Col>
          {consultantSelectElm}
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
