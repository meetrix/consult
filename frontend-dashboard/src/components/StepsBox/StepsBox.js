import React, {Component, Fragment} from 'react';
import {Row, Col} from 'reactstrap';

//Images
import SignupImage from '../../assets/LandingPageImages/signup.png';
import SelectTutorImage from '../../assets/LandingPageImages/select_tutor.png';
import ScheduleClassImage from '../../assets/LandingPageImages/schedule_class.png';

class StepsBox extends Component{

    render(){

        return(
            <Fragment>
                <Col className='landing-page-signup-block' xs="12" sm="4" md="4" >
                    <Row>
                        <Col xs="6" sm="6" md="6">
                            <img className='landing-page-signup-block-image' width='75%' src={SignupImage}/>
                        </Col>
                        <Col className='landing-page-signup-block-text' xs="6" sm="6" md="6">
                            <h4>Sign up</h4>
                        </Col>
                    </Row>
                </Col>

                <Col className='landing-page-tutor-block' xs="12" sm="4" md="4" >
                    <Row>
                        <Col xs="6" sm="6" md="6">
                            <img className='landing-page-tutor-block-image' width='75%' src={SelectTutorImage}/>
                        </Col>
                        <Col className='landing-page-tutor-block-text' xs="6" sm="6" md="6">
                            <h4>Select a Tutor</h4>
                        </Col>
                    </Row>
                </Col>

                <Col className='landing-page-schedule-class-block' xs="12" sm="4" md="4" >
                    <Row>
                        <Col xs="6" sm="6" md="6">
                            <img className='landing-page-schedule-class-block-image' width='75%' src={ScheduleClassImage}/>
                        </Col>
                        <Col className='landing-page-schedule-class-block-text' xs="6" sm="6" md="6">
                            <h4>Schedule a Class</h4>
                        </Col>
                    </Row>
                </Col>

            </Fragment>
        );
    }
}

export default StepsBox;