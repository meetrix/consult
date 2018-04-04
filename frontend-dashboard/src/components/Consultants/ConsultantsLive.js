/**
 * Created by supun on 16/02/18.
 */
import React, { Component } from 'react';
import { Row } from 'reactstrap';
import PropTypes from 'prop-types';
import ConsultantLive from './ConsultantLive';
import { BaseShowRow, BaseBox } from '../../components/BaseBox';

class ConsultantsLive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      availabelConsultants: [],
    };
  }
  componentDidMount() {
    this.getConsultantsRooms();
  }
  getConsultantsRooms() {
    const availabelConsultants = [];
    if (this.props.consultants !== undefined) {
      this.props.consultants.map((consultant, index) =>
      /* eslint react/no-array-index-key:0 */
        availabelConsultants.push(<ConsultantLive key={index} consultant={consultant} />));

      this.setState({ availabelConsultants });
    }
  }

  render() {
    return (
      <BaseBox>
        <Row>
          <BaseShowRow
            numComponentView={this.props.numOfConsultantShouldShow}
            availabelComponent={this.state.availabelConsultants}
          />
        </Row>
      </BaseBox>
    );
  }
}
ConsultantsLive.propTypes = {
  // actions: PropTypes.object.isRequired,
  consultants: PropTypes.arrayOf.isRequired,
  numOfConsultantShouldShow: PropTypes.number.isRequired,
};
export default ConsultantsLive;
