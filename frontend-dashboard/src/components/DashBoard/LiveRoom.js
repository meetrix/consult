/**
 * Created by supun on 15/02/18.
 */
import React,{Component} from 'react';
import PropTypes from 'prop-types'
import {Row,Button} from 'reactstrap';



//component
import BaseBox from '../BaseBox/BaseBox'
import ConsultsImage from '../Consultants/ConsultantsImage'

class LiveRoom extends Component{
    constructor(props) {
        super(props)
        this.state = {
            images: ["img/avatars/1.jpg", "img/avatars/2.jpg", "img/avatars/3.jpg", "img/avatars/4.jpg"]
        }
    }


    render(){
        return(
            <BaseBox>
                <Row>
                   <ConsultsImage images={this.state.images}/>
                </Row>
                <Row>
                    <Button color="info">Join Now</Button>
                </Row>

            </BaseBox>
        )
    }
}

LiveRoom.propTypes = {
    //images:PropTypes.array.isRequired

};

export default LiveRoom;
