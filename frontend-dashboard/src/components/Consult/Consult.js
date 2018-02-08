/**
 * Created by supun on 08/01/18.
 */
/**
 * Created by supun on 08/01/18.
 */

// Core modules
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars'

class Consult extends Component {

    constructor(props){
        super(props)

        this.ratingChanged = this.ratingChanged.bind(this);
    }

    componentWillMount(){

        console.log("Consult")
        console.log(this.props.actions)
    }

    ratingChanged(newRating) {
        console.log(newRating)
    }
    render() {
        return(
            <div className="consultant">

                <div className="consultant-image">
                    <img   alt="Avatar"  src="img/avatars/1.jpg"/>
                </div>
                <div className="consultant-detail" >
                    <p >{this.props.username}</p>
                    <ReactStars count={5} onChange={this.ratingChanged} size={24} color2={'#ffd700'} />
                </div>


                <p>Constult</p>
                <h1>Experts Area</h1>
                <h5>C</h5>
                <h5>java</h5>
                <h5>python</h5>

            </div>



        )
    }
}

Consult.propTypes = {
    _id:PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    actions:PropTypes.object.isRequired



};

export default Consult;