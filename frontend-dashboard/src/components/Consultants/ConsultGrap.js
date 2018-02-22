/**
 * Created by supun on 15/02/18.
 */
import React,{Component} from 'react';
import {Col,Row} from 'reactstrap';
import Call from 'react-icons/lib/md/call';
import Message from 'react-icons/lib/md/chat-bubble-outline';
import Schedule from 'react-icons/lib/fa/calendar-check-o';

class ConsultGrap extends Component{



    render(){
        return(
            <Col>
                <Row>
                    {/*<Col><i className="icon-phone icons font-1xl d-block mt-4"></i></Col>*/}
                    {/*<Col><i className="icon-speech icons font-1xl d-block mt-4"></i></Col>*/}
                    {/*<Col><i className="icon-calendar icons font-1xl d-block mt-4"></i></Col>*/}
                    <Call size={10} color='blue' style={{ margin:"auto" }}/>
                    <Message size={10} color='green' style={{ margin:"auto" }}/>
                    <Schedule size={10} color='red' style={{ margin:"auto" }}/>
                </Row>

            </Col>
        );
    }

}

export default ConsultGrap;