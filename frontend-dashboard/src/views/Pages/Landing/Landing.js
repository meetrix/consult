import React, {Component, Fragment} from 'react';
import {Row, Col,Button} from 'reactstrap';
import StepsBox from "../../../components/StepsBox/StepsBox";

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
                            <Button color="info"><h4>Get in</h4></Button>{' '}
                        </Col>
                    </Col>
                    {/*<img id="background_image" src="https://raw.githubusercontent.com/ahsanazim/slack-landing-page/master/screen_caps/main_background.jpg" style={imgStyle}></img>*/}
                </Row>

                <Row>
                    <Col className='steps-heading'>
                        <h3><b>Easy Three Steps!</b></h3>
                    </Col>
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