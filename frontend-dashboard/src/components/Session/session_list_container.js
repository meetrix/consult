import React,{Component} from 'react';
import {Col,Row} from 'reactstrap';
import SessionList from './session_list';

class SessionListContainer extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Col>
                <Row><SessionList user={{role:0}} records={[{id:'0',consulteeName:'supunconsultee',date:'2012/3/5',consultantName:'supunconsultant',startedTime:'14:00:03',duration:'30',classFee:'1000'},{id:'1',consulteeName:'supunconsultee',date:'2012/3/5',consultantName:'supunconsultant',startedTime:'14:00:03',duration:'30',classFee:'1000'}]} /></Row>
            </Col>
        )
    }
}

export default SessionListContainer;