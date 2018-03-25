/**
 * Created by supun on 16/03/18.
 */
//core library
import React,{Component} from 'react';
import {Col,Row,Card,CardTitle,Button,Alert} from 'reactstrap'
import PropTypes from 'prop-types'
import ReactList from 'react-list';

//component
import TimeSlot from '../../components/TimeSlot/TimeSlot'


class PickTimeSlotView extends Component{

  constructor(props){
    super(props)
    this.state = {
      error:{
        message:undefined,
        isError:false
      }
    };

  }
  _getAvailableTimeSlots(){
    let availabelTimeSlots = []
    if(this.props.scheduler.events!= undefined) {
      this.props.scheduler.events.map((event, index) =>{
        availabelTimeSlots.push(<TimeSlot key={index} actions={this.props.actions}event={event}/>)}
      )

    }
    return availabelTimeSlots
  }

  _scheduleTimeSlot(){
    if(!this.props.user.selectSlot.isTimeSlotSelect){
        this.setState({error:{
          message:'Select a Time Slot',
          isError:true
        }})
    }
    else {
      this.props.actions.scheduleConsultant({
          event:{
            id:this.props.user.selectSlot.timeSlot.id
          },
          user:{
          id:this.props.user.id,
          email:this.props.user .email
        }});
    }
  }

  render(){

    //check consultant is check time slot
    let error;
    if(this.state.error.isError && !this.props.user.selectSlot.isTimeSlotSelect){
      error = <Alert color="danger">{this.state.error.message}</Alert>
    }
    else {
      error =null;
    }

    //get time slot components
    let timeSlot = this._getAvailableTimeSlots();

    //generate time slot list
    let timeSlotList;
    if(timeSlot.length>0){
      timeSlotList = <ReactList
        itemRenderer={(index,key)=>timeSlot[index]}
        length={timeSlot.length}
        type='uniform'
        axis='x'
        useTranslate3d={true}
      />
    }

    return(
      <Col>
        <Card body>
          <CardTitle>Pick a time slot</CardTitle>
          <Row>
            <Col style={{overflow: 'auto'}}>
              {timeSlotList}
            </Col>
          </Row>
          <Row>{error}</Row>
          <Row>
            <Button color="primary"  onClick={this._scheduleTimeSlot.bind(this)}>Schedule</Button>
          </Row>

        </Card>
      </Col>
    )
  }
}
PickTimeSlotView.propTypes = {
  scheduler:PropTypes.shape({
    events:PropTypes.array,

  }),
  user:PropTypes.shape({
    selectSlot:PropTypes.shape({
      isTimeSlotSelect:PropTypes.bool,
      timeSlot:PropTypes.object
    }),
  }),

  actions: PropTypes.object.isRequired,

}
export default PickTimeSlotView;
