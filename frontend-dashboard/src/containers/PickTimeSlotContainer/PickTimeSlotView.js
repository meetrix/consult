/**
 * Created by supun on 16/03/18.
 */
import React,{Component} from 'react';
import {Col,Row,Card,CardTitle,Button} from 'reactstrap'
import ReactList from 'react-list';
import TimeSlot from '../../components/TimeSlot/TimeSlot'
import PropTypes from 'prop-types'
class PickTimeSlotView extends Component{

  constructor(props){
    super(props)
    this.state = {
      availabelTimeSlots:[]
    };

  }
  componentDidMount(){
    this.getAvailableTimeSlots();

  }
  getAvailableTimeSlots(){
    let availabelTimeSlots = []
    if(this.props.timeSlots!= undefined) {
      this.props.timeSlots.map((timeSlot, index) =>
        availabelTimeSlots.push(<TimeSlot key={index} actions={this.props.actions}timeSlot={timeSlot}/>)
      )

      this.setState({availabelTimeSlots: availabelTimeSlots});
    }
  }

  render(){
    return(
      <Col>
        <Card body>
          <CardTitle>Pick a time slot</CardTitle>
          <Row>
            <Col style={{overflow: 'auto'}}>
              <ReactList
                itemRenderer={(index,key)=>this.state.availabelTimeSlots[index]}
                length={this.state.availabelTimeSlots.length}
                type='uniform'
                axis='x'
                useTranslate3d={true}
              />
            </Col>
          </Row>
          <Row>
            <Button color="primary">Schedule</Button>
          </Row>

        </Card>
      </Col>
    )
  }
}
PickTimeSlotView.propTypes = {
  timeSlots:PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,

}
export default PickTimeSlotView;
