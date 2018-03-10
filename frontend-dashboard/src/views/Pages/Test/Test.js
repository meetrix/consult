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
import ContactConsult from '../../../components/Consultants/ContactConsult'
import ConsultantLive from '../../../components/Consultants/ConsultantLive'
import ConsulteeList from '../../../components/Consultee/ConsulteeList'
import {API, Auth} from 'aws-amplify';
class Test extends Component{

    constructor(props){
        super(props)


    }
    componentDidMount() {
        Auth.currentSession().then((idToken)=>{
            console.log(idToken.idToken.jwtToken)

            const options = {
                headers: {
                    Authorization: idToken.idToken.jwtToken
                }
            }
            console.log(API, options)
            API.get('PetStore','/pets',options)
                .then(resp => {
                    // this.setState({
                    //     data: resp
                    // });
                    console.log("response is : ", resp);
                })
                .catch (err => console.log(err))
        })



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
                <Row><ConsulteeList user={ {role:2}} records={[{id:'0',consulteeName:'supunconsultee',consulteeProfile:'img/avatars/1.jpg',nextSession:'2012/3/5',consultantName:'supunconsultant',consultantProfile:'img/avatars/2.jpg'},{id:'1',consulteeName:'supunconsultee',consulteeProfile:'img/avatars/1.jpg',nextSession:'2012/3/5',consultantName:'supunconsultant',consultantProfile:'img/avatars/2.jpg'}]} /></Row>


            </Col>

        );
    }
}
export default Test;