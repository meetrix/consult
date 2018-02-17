/**
 * Created by supun on 15/02/18.
 */
import React,{Component} from 'react';
import PropTypes from 'prop-types'
import {Row,Col,Button} from 'reactstrap';



//component
import BaseBox from '../BaseBox/BaseBox'
import ConsultantsImage from '../Consultants/ConsultantsImage'

class LiveRoom extends Component{
    constructor(props){
        super(props)
        this.state = {
            consultsViewImages:[],
            num:2
        };


    }


    render(){
        return(
            <div style={{float: 'left'}}>
                <BaseBox>
                    <Row>
                        <ConsultantsImage consultantsImages={this.props.room.consultantsImages}/>
                    </Row>
                    <Row>
                        <Button color="info">Join Now</Button>
                    </Row>

                </BaseBox>
            </div>
        )
    }
}

LiveRoom.propTypes = {
    //images:PropTypes.array.isRequired
    room:PropTypes.object.isRequired

};

export default LiveRoom;
