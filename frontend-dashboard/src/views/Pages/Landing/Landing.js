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
                    {/*<Col className='background-image'>*/}
                        {/*<Col className='background-text'>*/}
                            {/*<h4>Ready</h4>*/}
                            {/*<h4>Steady</h4>*/}
                            {/*<h4>Learn</h4>*/}
                            {/*<Button color="info"><h4>Get in</h4></Button>{' '}*/}
                        {/*</Col>*/}
                    {/*</Col>*/}
                </Row>

                {/*Steps Heading*/}
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