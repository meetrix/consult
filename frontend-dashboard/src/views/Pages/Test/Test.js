/**
 * Created by supun on 09/02/18.
 */
import React,{Component} from 'react'
import {Row,Col} from 'reactstrap'


import ScheduledWidget from '../../../components/Schedul/ScheduledWidget'
import ConsultantWidget from '../../../components/Consultants/ConsultantWidget'
import ImageWidget from '../../../components/Core/ImageWidget'
import BaseShowRow from '../../../components/BaseBox/BaseShowRow'
import ConsultImage from '../../../components/Consultants/ConsultantImage'
import LiveRoomContainer from '../../../containers/LiveRoomContainer/LiveRoomContainer'
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
                <Row>online consults</Row>
                <Row><LiveRoomContainer/></Row>
                <Row>video</Row>
            </Col>

        );
    }
}
export default Test;