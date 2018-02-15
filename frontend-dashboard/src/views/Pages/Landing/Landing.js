import React, {Component, Fragment} from 'react';
import {Row, Col,Button} from 'reactstrap';
import StepsBox from "../../../components/StepsBox/StepsBox";
import BackgroundCarousel from "../../../components/BackgroundCarousel/BackgroundCarousel";

class Landing extends Component{

    render(){
        return(
            <Fragment>
                {/*Background Carousel*/}
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
                <Row>
                    <StepsBox/>
                </Row>

            </Fragment>
        );
    }
}

export default Landing;