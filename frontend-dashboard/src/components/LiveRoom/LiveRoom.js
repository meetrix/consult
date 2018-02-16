/**
 * Created by supun on 15/02/18.
 */
import React,{Component} from 'react';
import PropTypes from 'prop-types'
import {Row,Button} from 'reactstrap';



//component
import BaseBox from '../BaseBox/BaseBox'
import ConsultImage from '../Consultants/ConsultantImage'
import BaseShowRow from '../BaseBox/BaseShowRow'
class LiveRoom extends Component{
    constructor(props){
        super(props)
        this.state = {
            room:this.props.room,
            consultsViewImages:[],
            num:2
        };

    }
    componentDidMount(){
        this.getConsultantsImages();

    }
    getConsultantsImages(){
        let consultsImages = []
        if(this.state.room.consultantsImages!= undefined) {
            this.state.room.consultantsImages.map((consultantImage, index) =>
                consultsImages.push(<ConsultImage key={index} image={consultantImage}/>)
            )
            this.setState({consultsViewImages: consultsImages});
        }
    }


    render(){
        return(
            <BaseBox>
                <Row>
                    <BaseShowRow  numComponentView={this.state.num} availabelComponent={this.state.consultsViewImages}/>
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
    room:PropTypes.object.isRequired

};

export default LiveRoom;
