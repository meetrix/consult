/**
 * Created by supun on 15/02/18.
 */
import React,{Component} from 'react';
import PropTypes from 'prop-types'
import {Row,Button} from 'reactstrap';

import LiveRoom from './LiveRoom'

class LiveRooms extends Component{

    constructor(props) {
        super(props);

        this.state = {
            firstIndex: 0,
            numRoom:2,
            availabelRooms:[],
            showRooms:[]
        }



        this.previousConsultant = this.previousConsultant.bind(this);
        this.nextConsultant = this.nextConsultant.bind(this);

    }
    render(){
        return(
            <div>hi</div>

        );
    }
}