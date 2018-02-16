/**
 * Created by supun on 15/02/18.
 */
import React,{Component} from 'react';
import ConsultImage from './ConsultantImage';
import {Row,Col} from 'reactstrap';

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
        if(this.props.images!= undefined || this.props.images.lenght!=0) {
            this.props.images.map((consultantImage, index) =>
                consultsImages.push(<ConsultImage key={index} image={consultantImage}/>)
            )

            this.setState({consultsImages: consultsImages});
        }
    }
    nextConsultant(){
        console.log(this.props.images.length)
        if(this.props.images.length > (this.state.showFirstComponentIndex+this.state.numConsult) ){
            this.setState(prev => (
                {
                    firstIndex: prev.showFirstComponentIndex +1
                }
            ));
            this.showConsultantImages();
            console.log(this.state.showFirstComponentIndex)
        }



    }
    previousConsultant(){
        console.log(this.state.showFirstComponentIndex)
        if(this.state.showFirstComponentIndex > 0) {
            this.setState(prev => (
                {
                    firstIndex: prev.showFirstComponentIndex -1
                }
            ));
            this.showConsultantImages();
            console.log(this.state.showFirstComponentIndex)
        }
    }
    showConsultantImages(){
        this.setState(prev => (
            {
                filterImages: prev.consultsImages.slice(prev.showFirstComponentIndex,prev.showFirstComponentIndex+ prev.numConsult)
            }
        ));
        console.log(this.state)
    }

    render(){


        return(

            <Col>
                <i className="icon-arrow-left icons font-2xl d-block mt-4" onClick={this.previousConsultant}></i>
                {this.state.filterImages}
                <i className="icon-arrow-right font-2xl d-block mt-4" onClick={this.nextConsultant}></i>
            </Col>
        )
    }
}

export default ConsultantsImage;