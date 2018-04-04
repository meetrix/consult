/**
 * Created by supun on 15/02/18.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import ReactList from 'react-list';

import LiveRoom from './LiveRoom';
import BaseBox from '../BaseBox/BaseBox';

class LiveRooms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      availabelRooms: [],
    };
  }
  componentDidMount() {
    this.getConsultantsRooms();
  }
  getConsultantsRooms() {
    const availabelRooms = [];
    if (this.props.rooms !== undefined) {
      this.props.rooms.map((room, index) =>
      /* eslint react/no-array-index-key:0  */
        availabelRooms.push(<LiveRoom key={index} room={room} />));

      this.setState({ availabelRooms });
    }
  }

  render() {
    return (
      <BaseBox>
        <Row>
          <Col style={{ overflow: 'auto' }}>
            <ReactList
              itemRenderer={index => this.state.availabelRooms[index]}
              length={this.state.availabelRooms.length}
              type="variable"
              axis="x"
            />
          </Col>
        </Row>
      </BaseBox>
    );
  }
}
LiveRooms.propTypes = {
  rooms: PropTypes.arrayOf.isRequired,
};

export default LiveRooms;
