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
            rooms:[
                {consultantsImages:["img/avatars/1.jpg","img/avatars/2.jpg","img/avatars/3.jpg","img/avatars/4.jpg"]},
                {consultantsImages:["img/avatars/1.jpg","img/avatars/2.jpg","img/avatars/3.jpg","img/avatars/4.jpg"]},
                {consultantsImages:["img/avatars/1.jpg","img/avatars/2.jpg","img/avatars/3.jpg","img/avatars/4.jpg"]},
                {consultantsImages:["img/avatars/1.jpg","img/avatars/2.jpg","img/avatars/3.jpg","img/avatars/4.jpg"]}

                ],
            availabelRooms:[],
            num:2
        };

    }
    componentDidMount(){
        this.getConsultantsRooms();

    }
    getConsultantsRooms(){
        let availabelRooms = []
        if(this.state.rooms!= undefined) {
            this.state.rooms.map((room, index) =>
                availabelRooms.push(<LiveRoom key={index} room={room}/>)
            )

            this.setState({availabelRooms: availabelRooms});
        }
    }

    render(){
        return(
            <BaseBox>
                <Row>
                    <BaseShowRow  numComponentView={this.state.num} availabelComponent={this.state.availabelRooms}/>
                </Row>
            </BaseBox>
        );
    }
}
export default LiveRooms;
