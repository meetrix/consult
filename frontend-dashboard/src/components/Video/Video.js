/**
 * Created by supun on 15/02/18.
 */
import React,{Component} from 'react';
import PropTypes from 'prop-types'
import {Row,Col,Button} from 'reactstrap';



//component
import BaseBox from '../BaseBox/BaseBox'
import ConsultantsImage from '../Consultants/ConsultantsImage'

class Video extends Component{
    constructor(props){
        super(props)


    }

    _getVideoPlayer(){

        return <div>hi</div>
    }


    render(){
        if(this.videoPlayer){

        }
        return(
            <div style={{float: 'left'}}>
            <Col>
                <BaseBox>
                    <Row>
                        <div className="consultant-image" onClick={this._getVideoPlayer.bind(this)}>
                            <img   alt="Avatar"  src={this.props.video.url}/>
                        </div>
                    </Row>


                </BaseBox>
            </Col>
            </div>
        )
    }
}

Video.propTypes = {
    //images:PropTypes.array.isRequired
    video:PropTypes.object.isRequired

};

export default Video;
/**
 * Created by supun on 16/02/18.
 */
