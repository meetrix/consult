/**
 * Created by supun on 08/01/18.
 */
/**
 * Created by supun on 08/01/18.
 */

// Core modules
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';
import {Col,Row} from 'reactstrap';

class Consultant extends Component {

    constructor(props){
        super(props)

        this.ratingChanged = this.ratingChanged.bind(this);
    }

    componentWillMount(){

        console.log("Consultant")
        console.log(this.props.actions)
    }

    ratingChanged(newRating) {
        console.log(newRating)
    }
    render() {
        return(
            <Col xs="12" sm= {this.props.columnWidth} md= {this.props.columnWidth} >
                <div className="consultant">
                <Row className="consultant-price"><p>1000/ - per session</p> </Row>
                <Row >
                    <Col className="consultant-image" xs="12" md="6">
                        <img   alt="Avatar"  src="img/avatars/1.jpg"/>
                    </Col>
                    <Col xs="12" md="6">
                        <Row>
                            <Col >
                                <p >{this.props.username}</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col >
                                <ReactStars count={5} onChange={this.ratingChanged} size={24} color2={'#ffd700'} />
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row>
                    <Col xs="12" md="6">
                        <Row >
                            <Col xs="12" md="6">Experts Area</Col>
                        </Row>
                        <Row>
                            <Col xs={{size: 'auto', offset: 1}} md={{size: 'auto', offset: 1}}>Technology</Col>
                        </Row>
                        <Row >
                            <Col xs={{size: 'auto', offset: 2}} md={{size: 'auto', offset: 2}}>C</Col>
                        </Row>
                        <Row >
                            <Col xs={{size: 'auto', offset: 2}} md={{size: 'auto', offset: 2}}>Java</Col>
                        </Row>
                        </Col>
                </Row>
                </div>

            </Col>



        )
    }
}

Consultant.propTypes = {
    _id:PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    actions:PropTypes.object.isRequired,
    columnWidth: PropTypes.number.isRequired

};

export default Consultant;