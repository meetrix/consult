import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';

class OtherAvailableStudents extends Component {
  constructor(props) {
    super(props);
    this.handleConsulteeClick = this.handleConsulteeClick.bind(this);
  }
  handleConsulteeClick(id, firstName, lastName) {
    this.props.updateRelatedUsers({
      id: this.props.consultantId.id,
      consultantFirstName: this.props.consulteeId.firstName,
      consultantLastName: this.props.consultantId.lastName,
      consulteeId: id,
      consulteeFirstName: firstName,
      consulteeLastName: lastName,
    });
  }
  render() {
    if (!this.props.consultees) {
      return null;
    }
    return (
    /* eslint react/no-array-index-key:0  */
    /* eslint array-callback-return:0 */
      <ListGroup>
        {this.props.consultees.map((consultee, index) => {
                    let status = true;
                    let ele;

                    this.props.usedConsultees.map((usedConsultee) => {
                        if (consultee.id === usedConsultee.id) status = false;
                    });
                    if (status === true) {
                        ele = (
                          <ListGroupItem key={index} onClick={this.handleConsulteeClick(consultee.id, consultee.firstName, consultee.lastName)}>{`${consultee.firstName} ${consultee.lastName}`}</ListGroupItem>);
                        }
                    return ele;
                }, this)}
      </ListGroup>
    );
  }
}
OtherAvailableStudents.propTypes = {
  consultees: PropTypes.shape.isRequired,
  updateRelatedUsers: PropTypes.func.isRequired,
  consulteeId: PropTypes.shape.isRequired,
  consultantId: PropTypes.shape.isRequired,
  usedConsultees: PropTypes.shape.isRequired,
};

export default OtherAvailableStudents;
