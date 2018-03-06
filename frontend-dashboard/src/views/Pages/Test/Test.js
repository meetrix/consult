/**
 * Created by supun on 09/02/18.
 */
import React,{Component} from 'react'
import {Row,Col} from 'reactstrap'


import ScheduledWidget from '../../../components/Scheduler/ScheduledWidget'
import ConsultantWidget from '../../../components/Consultants/ConsultantWidget'
import ImageWidget from '../../../components/Core/ImageWidget'
import BaseShowRow from '../../../components/BaseBox/BaseShowRow'
import ConsultImage from '../../../components/Consultants/ConsultantImage'
import LiveRoomContainer from '../../../containers/LiveRoomContainer/LiveRoomContainer'
import ConsultantLiveContainer from '../../../containers/ConsultantLiveContainer/ConsultantLiveContainer'
import VideoContainer from '../../../containers/VideoContainer/VideoContainer'
import MyConsultantsContainer from '../../../containers/MyConsutantsContainer/MyConsultantsContainer'
import {BaseScroll} from '../../../components/BaseBox'

import RequestTimeSlot from '../../../components/Scheduler/RequestTimeSlot'
class Test extends Component{

    constructor(props){
        super(props)


    }
    componentDidMount() {

    }
    render(){
        return(
            <Col>
                Dashbord
                {/*<Row className="dash-board-component-wrapper"><MyConsultantsContainer/></Row>*/}
                {/*<Row className="dash-board-component-wrapper"><ConsultantLiveContainer/></Row>*/}
                {/*<Row className="dash-board-component-wrapper"><LiveRoomContainer/></Row>*/}
                {/*<Row className="dash-board-component-wrapper"><VideoContainer/></Row>*/}
                {/*<Row><BaseScroll/></Row>*/}
                <Row><RequestTimeSlot/></Row>


            </Col>

        );
    }
}
export default Test;