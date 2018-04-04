/**
 * Created by supun on 12/01/18.
 */

// Core modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LiveRooms from '../../components/LiveRoom/LiveRooms';

class LiveRoomContainerView extends Component {
  render() {
    return (
      <LiveRooms rooms={this.props.rooms} numOfRoomsShouldShow={this.props.numOfRoomsShouldShow} />
    );
  }
}

LiveRoomContainerView.propTypes = {
  rooms: PropTypes.arrayOf.isRequired,
  numOfRoomsShouldShow: PropTypes.number.isRequired,

};

export default LiveRoomContainerView;/**
 * Created by supun on 16/02/18.
 */
