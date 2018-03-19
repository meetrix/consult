/**
 * Created by supun on 16/03/18.
 */
import React,{Component} from 'react';
import {Col,Row,Card,CardTitle,Button,Alert} from 'reactstrap'
import ReactList from 'react-list';
import TimeSlot from '../../components/TimeSlot/TimeSlot'
import PropTypes from 'prop-types'
import moment from 'moment'
class PickTimeSlotView extends Component{

  constructor(props){
    super(props)
    this.state = {
      availabelTimeSlots:[],
      error:{
        message:'',
        isError:false
      }
    };

  }
  componentDidMount(){
    this.props.actions.getScheduleEvents(
      {
        start:moment().toDate(),
        end:moment().add(4,"hours").toDate(),
        title:'example event'
      }
    )

  }
  getAvailableTimeSlots(){
    let availabelTimeSlots = []
    if(this.props.scheduler.events!= undefined) {
      this.props.scheduler.events.map((event, index) =>{
        availabelTimeSlots.push(<TimeSlot key={index} actions={this.props.actions}event={event}/>)}
      )


    }
    return availabelTimeSlots
  }

  _scheduleTimeSlot(){
    if(!this.props.scheduler.consulteeSelectSlot.isTimeSlotSelect){
        this.setState({error:{
          message:'Select a Time Slot',
          isError:true
        }})
    }
    else {
      this.props.actions.scheduleConsult({timeSlot:this.props.scheduler.consulteeSelectSlot.timeSlot,user:this.props.user});
    }
  }
  render(){
    let error
    if(this.state.error.isError && !this.props.scheduler.consulteeSelectSlot.isTimeSlotSelect){
      error = <Alert color="danger">{this.state.error.message}</Alert>
    }
    else {
      error =null;
    }
    let timeSlot = this.getAvailableTimeSlots()
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
    events:PropTypes.array.isRequired,
    consulteeSelectSlot:PropTypes.shape({
      isTimeSlotSelect:PropTypes.bool.isRequired,
      timeSlot:PropTypes.object.isRequired
    }),
  }),
  user:PropTypes.object.isRequired,

  actions: PropTypes.object.isRequired,

}
export default PickTimeSlotView;
