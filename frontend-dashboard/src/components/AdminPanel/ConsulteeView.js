import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody, ListGroup, ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';


class ConsulteeView extends Component {
  constructor(props) {
    super(props);
  }
  AvailableStudents() {
    if (!this.props.consultees) {
      return null;
    }
    return (
      <ListGroup>
      {
        this.props.consultees.map((consultee, index) => <ListGroupItem key={index}>{`${consultee.firstName} ${consultee.lastName}`}</ListGroupItem>)
      }
    </ListGroup>);
  }
  OtherAvailableStudents() {
    let status = true;

    function handleConsulteeClick(id, firstName, lastName, event) {
      this.props.updateRelatedUsers({
        id: this.props.consultantId.id,
        consultantFirstName: this.props.consulteeId.firstName,
        consultantLastName: this.props.consultantId.lastName,
        consulteeId: id,
        consulteeFirstName: firstName,
        consulteeLastName: lastName,
      });
    }


    if (!this.props.consultees) {
      return null;
    }
    return (
      <ListGroup>
        {this.props.consultees.map(function (consultee, index) {
          status = true;
          this.props.usedConsultees.map((usedConsultee) => {
            if (consultee.id == usedConsultee.id) status = false;
          });

          if (status == true) { return (<ListGroupItem key={index} onClick={handleConsulteeClick.bind(this, consultee.id, consultee.firstName, consultee.lastName)}>{`${consultee.firstName} ${consultee.lastName}`}</ListGroupItem>); }
        }, this)}
      </ListGroup>
    );
  }
  render() {
    let consultees;
    const consultant = this.props.admin.consultants.find((obj) => {
      const isConsult = obj.id === this.props.admin.consultantId.id;
      return isConsult;
    }, this);
    if (consultant) {
      consultees = consultant.relatedUsers;
      console.log(`consultees: ${consultees}`);
    } else {
      consultees = null;
    }

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
  consultees: PropTypes.arrayOf.isRequired,
  updateRelatedUsers: PropTypes.func.isRequired,
};
export default ConsulteeView;
