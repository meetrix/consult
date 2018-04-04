import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';

class AvailableStudents extends Component {
  render() {
    if (!this.props.consultees) {
      return null;
    }
    /* eslint react/no-array-index-key:0 */
    return (
      <ListGroup>
        {
            this.props.consultees.map((consultee, index) => <ListGroupItem key={index}>{`${consultee.firstName} ${consultee.lastName}`}</ListGroupItem>)
        }
      </ListGroup>);
  }
}
AvailableStudents.propTypes = {
  consultees: PropTypes.shape.isRequired,
};

export default AvailableStudents;
