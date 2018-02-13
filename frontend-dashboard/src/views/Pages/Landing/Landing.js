import React, {Component, Fragment} from 'react';
import {Row, Col,Button} from 'reactstrap';
import StepsBox from "../../../components/StepsBox/StepsBox";
// import "../../../../scss/component/landing/landing.scss";

class Landing extends Component{

    render(){
        return(
            <Fragment>
                {/*Background Image*/}
                <Row>
                    <Col className='background-image'>
                        <Col className='background-text'>
                            <h4>Ready</h4>
                            <h4>Steady</h4>
                            <h4>Learn</h4>
                            <Button color="info">Get in</Button>{' '}
                        </Col>
                    </Col>
                    {/*<img id="background_image" src="https://raw.githubusercontent.com/ahsanazim/slack-landing-page/master/screen_caps/main_background.jpg" style={imgStyle}></img>*/}
                </Row>

                <Row className='steps_heading'>
                    <h3>Easy Three Steps!</h3>
                </Row>

                {/*Steps*/}
                <Row>
                    <StepsBox/>
                </Row>

            </Fragment>
        );
    }
}

export default Landing;