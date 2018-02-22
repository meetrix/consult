/**
 * Created by supun on 15/02/18.
 */
import React,{Component} from 'react';
import {Row,Col,Button} from 'reactstrap';

import {BaseBox,BaseShowRow} from '../BaseBox'
import ConsultantImage from './ConsultantImage'


class ConsultantsImage extends Component{

    constructor(props){
        super(props)
        this.state = {
            consultantAvailabelImages:[],
            num:2
        };


    }
    componentDidMount(){
        this.getConsultantsImages();

    }
    getConsultantsImages(){
        let consultantAvailabelImages = []
        if(this.props.consultantsImages!= undefined) {
            this.props.consultantsImages.map((consultantImage, index) =>
                consultantAvailabelImages.push(<ConsultantImage key={index} image={consultantImage}/>)
            )
            this.setState({consultantAvailabelImages: consultantAvailabelImages});
        }
    }


    render(){


        return(

            <BaseBox>
                <Row>
                    <BaseShowRow  numComponentView={this.state.num} availabelComponent={this.state.consultantAvailabelImages}/>
                </Row>

            </BaseBox>
        )
    }
}

export default ConsultantsImage;