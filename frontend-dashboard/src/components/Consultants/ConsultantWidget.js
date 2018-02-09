import React,{Component} from 'react';
import ConsultantImage from "./ConsultantImage";
import ReactStars from 'react-stars';


class ConsultantWidget extends Component{

    constructor(props){
        super(props)

        this.ratingChanged = this.ratingChanged.bind(this);
    }

    ratingChanged(newRating) {
        console.log(newRating)
    }

    render(){
        return (

            <div className="consultantWidget">
                <div className="widget-image"> <ConsultantImage /> </div>

                <div className="widget-detail" >
                    <p className="consultant-username" >{this.props.username}</p>
                    <ReactStars count={5} onChange={this.ratingChanged} size={24} color2={'#ffd700'} />
                </div>
                <div className="widget-price" >
                    <p className="consultant-widget-price">{this.props.price}</p>
                </div>
            </div>
        )


    }


}
export default ConsultantWidget;