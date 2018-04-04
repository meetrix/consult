/**
 * Created by supun on 15/02/18.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';


// component
import BaseBox from '../BaseBox/BaseBox';

class Video extends Component {
  constructor(props) {
    super(props);

    this._getVideoPlayer = this._getVideoPlayer.bind(this);
  }
  _getVideoPlayer() {
    this.element = <div>hi</div>;
    return this.element;
  }

  render() {
    return (
      <div style={{ float: 'left' }}>
        <Col>
          <BaseBox>
            <Row>
              <div className="consultant-image" onClick={() => {}} role="button" tabIndex={0} onKeyUp={this._getVideoPlayer}>
                <img alt="Avatar" src={this.props.video.url} />
              </div>
            </Row>


          </BaseBox>
        </Col>
      </div>
    );
  }
}

Video.propTypes = {
  // images:PropTypes.array.isRequired
  video: PropTypes.shape.isRequired,

};

export default Video;
/**
 * Created by supun on 16/02/18.
 */
