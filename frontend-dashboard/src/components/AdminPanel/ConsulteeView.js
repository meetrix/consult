import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';
import AvailableStudents from './AvailableStudents';
import OtherAvailableStudents from './OtherAvailableStudents';

class ConsulteeView extends Component {
  render() {
    let consultees;
    const consultant = this.props.admin.consultants.find((obj) => {
      const value = obj.id === this.props.admin.consultantId.id;
      return value;
    }, this);
    if (consultant) {
      consultees = consultant.relatedUsers;
    } else {
      consultees = null;
    }
    /* eslint max-len:0 */
    return (
      <div>
        <h1>Yasith</h1>
        <Row>
          <Col xs="12" sm="6">
            <Card>
              <CardHeader>
                <strong>Students</strong>

              </CardHeader>
              <CardBody>
                <AvailableStudents consultees={consultees} />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Card>
            <CardHeader>
              <strong>Other Students</strong>
            </CardHeader>
            <CardBody>
              <OtherAvailableStudents consultees={this.props.admin.consultees} consultantId={this.props.admin.consultantId} updateRelatedUsers={this.props.action.updateRelatedUsers} usedConsultees={consultees} />
            </CardBody>
          </Card>
        </Row>
      </div>
    );
  }
}
ConsulteeView.propTypes = {
  admin: PropTypes.shape.isRequired,
  action: PropTypes.func.isRequired,
};
export default ConsulteeView;
