import React,{Component} from 'react';
import {Col} from 'reactstrap';
class ConsultantImage extends Component{

    constructor(props){
        super(props);
    }

    render(){

        return(
            <Col>
                <div className="consultant-image">
                    <img   alt="Avatar"  src={this.props.image}/>
                </div>
            </Col>
        )
    }
}

export default ConsultantImage;