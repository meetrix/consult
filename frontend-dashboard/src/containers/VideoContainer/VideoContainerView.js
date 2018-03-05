/**
 * Created by supun on 16/02/18.
 */
/**
 * Created by supun on 12/01/18.
 */

// Core modules
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CourseVideos from '../../components/Video/CourseVideos'

class VideoContainerView extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return(
            <CourseVideos videos={this.props.videos} numOfVideoShouldShow={this.props.numOfVideoShouldShow}/>
        )
    }
}

VideoContainerView.propTypes = {
    actions: PropTypes.object.isRequired,
    videos:PropTypes.array.isRequired,
    numOfVideoShouldShow:PropTypes.number.isRequired

};

export default VideoContainerView;/**
 * Created by supun on 16/02/18.
 */
