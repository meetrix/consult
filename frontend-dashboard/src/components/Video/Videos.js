/**
 * Created by supun on 15/02/18.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import ReactList from 'react-list';

import Video from './Video';
import { BaseBox } from '../BaseBox';


class Videos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      availabelVideos: [],
    };
  }
  componentDidMount() {
    this.getAvailableVideos();
  }
  getAvailableVideos() {
    const availabelVideos = [];
    if (this.props.videos != undefined) {
      this.props.videos.map((video, index) =>
        availabelVideos.push(<Video key={index} video={video} />));

      this.setState({ availabelVideos });
    }
  }

  render() {
    return (
      <BaseBox>
        <Row>
          <Col style={{ overflow: 'auto' }}>
            <ReactList
              itemRenderer={(index, key) => this.state.availabelVideos[index]}
              length={this.state.availabelVideos.length}
              type="uniform"
              axis="x"
              useTranslate3d
            />
          </Col>
        </Row>
      </BaseBox>
    );
  }
}
Videos.propTypes = {
  videos: PropTypes.array.isRequired,
  numOfVideoShouldShow: PropTypes.number.isRequired,

};

export default Videos;
/**
 * Created by supun on 16/02/18.
 */
