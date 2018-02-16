/**
 * Created by supun on 12/01/18.
 */

// Core modules
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LiveRooms from '../../components/LiveRoom/LiveRooms'

class LiveRoomContainerView extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return(
            <LiveRooms rooms={this.props.rooms} numOfRoomsShouldShow={this.props.numOfRoomsShouldShow}></LiveRooms>
        )
    }
}

LiveRoomContainerView.propTypes = {
    actions: PropTypes.object.isRequired,
    rooms:PropTypes.array.isRequired,
    numOfRoomsShouldShow:PropTypes.number.isRequired

};

export default LiveRoomContainerView;/**
 * Created by supun on 16/02/18.
 */
