/**
 * Created by supun on 16/02/18.
 */
/**
 * Created by supun on 12/01/18.
 */

// Core modules
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Videos from '../../components/Video/Videos';

class VideoContainerView extends Component {
  render() {
    return (
      <Videos videos={this.props.videos} numOfVideoShouldShow={this.props.numOfVideoShouldShow} />
    );
  }
}
VideoContainerView.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  numOfVideoShouldShow: PropTypes.number.isRequired,

};

export default VideoContainerView;/**
 * Created by supun on 16/02/18.
 */
