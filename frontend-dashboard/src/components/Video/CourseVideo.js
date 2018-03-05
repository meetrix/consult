import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {Row,Col} from 'reactstrap';


import BaseBox from '../BaseBox/BaseBox'
import ConsultantsImage from '../Consultants/ConsultantsImage'

class CourseVideo extends Component{
    constructor(props){
        super(props)


    }

    render(){
        return(
            <div style={{float: 'left'}}>
            <Col>
                <BaseBox>
                    <Row>
                        <div className="consultant-image">
                            <img   alt="Avatar"  src={this.props.video.url}/>
                        </div>
                    </Row>


                </BaseBox>
            </Col>
            </div>
        )
    }
}

CourseVideo.propTypes = {
    //images:PropTypes.array.isRequired
    video:PropTypes.object.isRequired

};

export default CourseVideo;
