import React, { Component } from 'react';
import { Row, Col, ListGroup, ListGroupItem, Card, CardHeader, CardBody } from 'reactstrap';
import PropTypes from 'prop-types';

class AdminPanel extends Component {
  constructor(props) {
    super(props);
    this.handleConsultantClick = this.handleConsultantClick.bind(this);
  }
  componentDidMount() {
    this.props.actions.getConsultants({

    });
    this.props.actions.getConsultees({

    });
  }

  handleConsultantClick(id, firstName, lastName) {
    this.props.actions.setConsultantId({
      id,
      firstName,
      lastName,
    });
  }

  render() {
    /* eslint react/no-array-index-key:0 */
    /* eslint arrow-body-style:0 */
    return (
      <div>
        <Row>
          <Col xs="12" sm="6">
            <Card>
              <CardHeader>
                <strong>Teachers</strong>
              </CardHeader>
              <CardBody>
                <ListGroup>
                  {this.props.admin.consultants.map((consultant, index) => {
                    return <ListGroupItem key={index} onClick={this.handleConsultantClick(consultant.id, consultant.firstName, consultant.lastName)} href="#/dashboard/admin_panel/consultant" tag="a">{`${consultant.firstName} ${consultant.lastName}` }</ListGroupItem>;
                  }, this)}
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
          <Col xs="12" sm="6">
            <Card>
              <CardHeader>
                <strong>Students</strong>
              </CardHeader>
              <CardBody>
                <ListGroup>
                  {this.props.admin.consultees.map((consultee, index) => <ListGroupItem key={index} href="#/dashboard/admin_panel/test" tag="a">{`${consultee.firstName} ${consultee.lastName}`} </ListGroupItem>)}
                </ListGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
AdminPanel.propTypes = {
  actions: PropTypes.shape.isRequired,
  admin: PropTypes.shape.isRequired,
};
export default AdminPanel;
