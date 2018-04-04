/**
 * Created by supun on 16/03/18.
 */
import React, { Component } from 'react';
import { Col, Card, CardBody, CardImg, CardTitle, CardFooter, Row } from 'reactstrap';
import PropTypes from 'prop-types';
import timeSlot from '../../../ProjectConfiguration/timeSlot.json';


class TimeSlot extends Component {
  constructor(props) {
    super(props);
    this._selectTimeSlot = this._selectTimeSlot.bind(this);
  }

  _selectTimeSlot() {
    this.props.actions.selectTimeSlot({ selectSlot: this.props.event }, { isTimeSlotSelect: true });
  }
  render() {
    let consultantImgElm;
    let consultSubjectElm;
    if (timeSlot.consultantImage) {
      consultantImgElm = <CardImg top width="100%" src="/img/avatars/1.jpg" alt="admin@meetrix.io" />;
    }
    if (timeSlot.consultSubject) {
      consultSubjectElm = <CardTitle className="text-center" >Mathematics</CardTitle>;
    }
    return (
      <div style={{ float: 'left' }} role="button" onKeyUp={this._selectTimeSlot} onClick={() => {}} tabIndex={0} >
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
    );
  }
}
TimeSlot.propTypes = {
  event: PropTypes.shape.isRequired,
  actions: PropTypes.shape({
    selectTimeSlot: PropTypes.func.isRequired,
  }).isRequired,


};
export default TimeSlot;
