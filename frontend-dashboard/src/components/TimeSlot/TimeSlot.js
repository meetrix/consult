/**
 * Created by supun on 16/03/18.
 */
import React,{Component} from 'react';
import {Col,Card,CardBody,CardImg,CardTitle,CardFooter,Row} from 'reactstrap'

import timeSlot from '../../../ProjectConfiguration/timeSlot.json'
import PropTypes from 'prop-types'
class TimeSlot extends Component{

  constructor(props){
    super(props)
  }
  render(){
    let consultantImgElm;
    let consultSubjectElm;
    if(timeSlot.consultantImage){
        consultantImgElm =   <CardImg top width="100%" src="/img/avatars/1.jpg" alt="admin@meetrix.io" />
    }
    if(timeSlot.consultSubject){
      consultSubjectElm = <CardTitle className="text-center" >Mathematics</CardTitle>
    }
    return(
      <div style={{float: 'left'}}>
        <Col>
          <Card>
            {consultantImgElm}
            <CardBody>
              {consultSubjectElm}
            </CardBody>
            <CardFooter>
            <Row>
              <Col className="text-center">2016/09/13</Col>
              <Col className="text-center">12.00 -14.00</Col>
            </Row>
            </CardFooter>
          </Card>
        </Col>
      </div>
    )
  }

}
TimeSlot.propTypes = {
  timeSlot:PropTypes.object.isRequired,


}
export default TimeSlot
