import React, {Component, Fragment} from 'react';
import {Row, Col, Nav} from 'reactstrap';
import StepsBox from "../../../components/StepsBox/StepsBox";
import BackgroundCarousel from "../../../components/BackgroundCarousel/BackgroundCarousel";
import MenuBarLanding from "../../../components/MenuBar/MenuBarLanding";

class Landing extends Component{

    render(){
        return(
            <Fragment>
                {/*Background Carousel*/}
                <Row>
                    <Col>
                    <MenuBarLanding/>
                    </Col>
                </Row>
                <Row>
                    <BackgroundCarousel/>
                </Row>

                {/*Steps Heading*/}
                <Row>
                    <Col className='landing-page-steps-heading'>
                        <h3><b>Easy Three Steps!</b></h3>
                    </Col>
                </Row>

                {/*Steps*/}
                <Row className="landing-page-stepsblock">
                    <StepsBox/>
                </Row>

            </Fragment>
        );
    }
}

export default Landing;