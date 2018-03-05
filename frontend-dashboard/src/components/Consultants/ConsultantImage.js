import React,{Component} from 'react';
import {Col} from 'reactstrap';
import PropTypes from 'prop-types'
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
ConsultantImage.propTypes = {
    //images:PropTypes.array.isRequired
    image:PropTypes.string.isRequired

};

export default ConsultantImage;