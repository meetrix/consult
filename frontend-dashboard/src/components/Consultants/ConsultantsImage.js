/**
 * Created by supun on 15/02/18.
 */
import React,{Component} from 'react';
import ConsultImage from './ConsultantImage';
import {Row} from 'reactstrap';

class ConsultantsImage extends Component{

    constructor(props) {
        super(props);
        this.state = {
            firstIndex: 0,
            numConsult:2,
            consultsImages:[],
            filterImages:[]
        }



        this.previousConsultant = this.previousConsultant.bind(this);
        this.nextConsultant = this.nextConsultant.bind(this);

    }
    componentDidMount(){
        this.getConsultantsImages();
        this.showConsultantImages();
    }
    getConsultantsImages(){
        let consultsImages = []

        this.props.images.map((consultantImage,index) =>
            consultsImages.push(<ConsultImage key={index} image={consultantImage} />)
        )

        this.setState ({consultsImages:consultsImages});
    }
    nextConsultant(){
        console.log(this.props.images.length)
        if(this.props.images.length > (this.state.firstIndex+this.state.numConsult) ){
            this.setState(prev => (
                {
                    firstIndex: prev.firstIndex +1
                }
            ));
            this.showConsultantImages();
            console.log(this.state.firstIndex)
        }



    }
    previousConsultant(){
        console.log(this.state.firstIndex)
        if(this.state.firstIndex > 0) {
            this.setState(prev => (
                {
                    firstIndex: prev.firstIndex -1
                }
            ));
            this.showConsultantImages();
            console.log(this.state.firstIndex)
        }
    }
    showConsultantImages(){
        this.setState(prev => (
            {
                filterImages: prev.consultsImages.slice(prev.firstIndex,prev.firstIndex+ prev.numConsult)
            }
        ));
        console.log(this.state)
    }

    render(){


        return(

            <Row>
                <i className="icon-arrow-left icons font-2xl d-block mt-4" onClick={this.previousConsultant}></i>
                {this.state.filterImages}
                <i className="icon-arrow-right font-2xl d-block mt-4" onClick={this.nextConsultant}></i>
            </Row>
        )
    }
}

export default ConsultantsImage;