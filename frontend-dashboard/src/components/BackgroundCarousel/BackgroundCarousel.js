import React, {Component, Fragment} from 'react';
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import Transition from 'react-transition-group';
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

        const slides = LandingPageBackgroundCarouselItems.map((item, index) => {
            return (
                <CarouselItem className='landing-page-background-carousel'
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={index}
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
Carousel.propTypes = {
    // the current active slide of the carousel
    activeIndex: PropTypes.number,
    // a function which should advance the carousel to the next slide (via activeIndex)
    next: PropTypes.func.isRequired,
    // a function which should advance the carousel to the previous slide (via activeIndex)
    previous: PropTypes.func.isRequired,
    // controls if the left and right arrow keys should control the carousel
    keyboard: PropTypes.bool,
    /* If set to "hover", pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on
     * mouseleave. If set to false, hovering over the carousel won't pause it. (default: "hover")
     */
    pause: PropTypes.oneOf(['hover', false]),
    // Autoplays the carousel after the user manually cycles the first item. If "carousel", autoplays the carousel on load.
    // This is how bootstrap defines it... I would prefer a bool named autoplay or something...
    ride: PropTypes.oneOf(['carousel']),
    // the interval at which the carousel automatically cycles (default: 5000)
    interval: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.bool,
    ]),
    children: PropTypes.array,
    // called when the mouse enters the Carousel
    mouseEnter: PropTypes.func,
    // called when the mouse exits the Carousel
    mouseLeave: PropTypes.func,
    // controls whether the slide animation on the Carousel works or not
    slide: PropTypes.bool,
    cssModule: PropTypes.object,
};
CarouselItem.propTypes = {
    ...Transition.propTypes,
    tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    in: PropTypes.bool,
    cssModule: PropTypes.object,
    children: PropTypes.node,
    slide: PropTypes.bool,
};
export default BackgroundCarousel;