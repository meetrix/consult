/**
 * Created by supun on 06/03/18.
 */
import React,{Component} from 'react'
import {Col,Row, Alert,Button} from 'reactstrap'

import DateTimeSelector from '../Calendar/DateTimeSelector'

class RequestTimeSlot extends Component{


    render(){
        return(
            <Col>
                <Row>
                    <Col>
                        <Alert className="text-center" color="success">
                            Didn't find the time slot you were  looking for ?
                        </Alert>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Alert className="text-center" color="success">
                            Request Time Slot
                        </Alert>
                    </Col>
                </Row>
                <Row>
                    <Col >
                    <DateTimeSelector/>
                    </Col>

                </Row>
                <Row>
                    <Col className="text-center">
                        <Button size="lg"  block color="Request Time Slot">success</Button>
                    </Col>
                </Row>
            </Col>


        )
    }
}

export default RequestTimeSlot