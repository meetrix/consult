/**
 * Created by supun on 08/01/18.
 */

// Core modules
import React, { Component } from 'react';
import { Col } from 'reactstrap';
import PropTypes from 'prop-types';
import Consultants from '../../components/Consultants/Consultants';
import BaseBox from '../../components/BaseBox/BaseBox';

class MyConsultantsContainer extends Component {
  componentWillMount() {
    // this.props.actions.getConsultants();
  }
  render() {
    return (
      <BaseBox>
        <Col>

          <Consultants consultants={this.props.consultants} actions={this.props.actions} />

        </Col>
      </BaseBox>
    );
  }
}

MyConsultantsContainer.propTypes = {
  consultants: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,


  })).isRequired,
  actions: PropTypes.shape().isRequired,

};

export default MyConsultantsContainer;/**
 * Created by supun on 18/02/18.
 */
