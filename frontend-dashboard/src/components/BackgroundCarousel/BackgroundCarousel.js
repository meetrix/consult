import React, {Component, Fragment} from 'react';
import {Redirect} from 'react-router-dom';
import {
    Button,
    Col,
    Row,
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import {LandingPageBackgroundCarouselItems} from '../../../config.js';
//CarouselBackgroundImage
import CarouselBackgroundImage from '../../assets/LandingPageImages/carousel_background.png';

class BackgroundCarousel extends Component{
    constructor(props) {
        super(props);
        this.state = {
            activeIndex: 0,
            auth:this.props.auth,
            login:false
        };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
        this.login = this.login.bind(this);
    }
    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === LandingPageBackgroundCarouselItems.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? LandingPageBackgroundCarouselItems.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    login(){
        this.setState({
            login: true
        });
    }

    render() {
        if(this.state.login) {
            return (
                <Redirect to="/login"/>
            )
        }
        const { activeIndex } = this.state;

        const slides = LandingPageBackgroundCarouselItems.map((item) => {
            return (
                <CarouselItem className='landing-page-background-carousel'
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <Row>
                    <Col className='landing-page-background-text'>
                    <h4>Ready</h4>
                    <h4>Steady</h4>
                    <h4>Learn</h4>
                    <Button color="info" active onClick={ () => this.login()}><h4>Get in</h4></Button>{' '}
                    </Col>
                    <img className='landing-page-carousel-image' src={CarouselBackgroundImage} alt={item.altText} />
                    </Row>
                    <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
                </CarouselItem>
            );
        });

        return (
            <Carousel className='landing-page-background-carousel'
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}
            >
                <CarouselIndicators items={LandingPageBackgroundCarouselItems} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
            </Carousel>
        );
    }

}
export default BackgroundCarousel;