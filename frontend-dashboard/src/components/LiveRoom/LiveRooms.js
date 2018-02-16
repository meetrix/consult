/**
 * Created by supun on 15/02/18.
 */
import React,{Component} from 'react';
import PropTypes from 'prop-types'
import {Row,Button} from 'reactstrap';

import LiveRoom from './LiveRoom'
import BaseShowRow from '../BaseBox/BaseShowRow'
import BaseBox from '../BaseBox/BaseBox'

class LiveRooms extends Component{

    constructor(props){
        super(props)
        this.state = {
            availabelRooms:[]
        };

    }
    componentDidMount(){
        this.getConsultantsRooms();

    }
    getConsultantsRooms(){
        let availabelRooms = []
        if(this.props.rooms!= undefined) {
            this.props.rooms.map((room, index) =>
                availabelRooms.push(<LiveRoom key={index} room={room}/>)
            )

            this.setState({availabelRooms: availabelRooms});
        }
    }

    render(){
        return(
            <BaseBox>
                <Row>
                    <BaseShowRow  numComponentView={this.props.numOfRoomsShouldShow} availabelComponent={this.state.availabelRooms}/>
                </Row>
            </BaseBox>
        );
    }
}
LiveRooms.propTypes = {
    rooms:PropTypes.array.isRequired,
    numOfRoomsShouldShow:PropTypes.number.isRequired

};

export default LiveRooms;
