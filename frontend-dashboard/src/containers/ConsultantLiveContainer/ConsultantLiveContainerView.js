/**
 * Created by supun on 16/02/18.
 */
/**
 * Created by supun on 12/01/18.
 */

// Core modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ConsultantsLive from '../../components/Consultants/ConsultantsLive';

class ConsultantLiveContainerView extends Component {
  render() {
    return (
      /* eslint max-len:0 */
      <ConsultantsLive consultants={this.props.consultants} numOfConsultantShouldShow={this.props.numOfConsultantShouldShow} />
    );
  }
}

ConsultantLiveContainerView.propTypes = {
  consultants: PropTypes.arrayOf.isRequired,
  numOfConsultantShouldShow: PropTypes.number.isRequired,

};

export default ConsultantLiveContainerView;/**
 * Created by supun on 16/02/18.
 */
