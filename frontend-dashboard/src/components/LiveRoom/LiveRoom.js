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
                        <div style={{margin:'auto'}}>
                            Room Name
                        </div>

                    </Row>
                    <Row>
                        <ConsultantsImage consultantsImages={this.props.room.consultantsImages}/>
                    </Row>
                    <Row>
                        <div style={{margin:'auto'}}>
                            <Button color="warning">Join Now</Button>
                        </div>

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
