/**
 * Created by supun on 08/01/18.
 */
/**
 * Created by supun on 08/01/18.
 */

// Core modules
import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Consult extends Component {

    componentWillMount(){

        console.log("Consult")
        console.log(this.props.actions)
    }
    render() {
        return(
            <li>
                <p>ConsultName: {this.props.username}</p>
            </li>


        )
    }
}

Consult.propTypes = {
    _id:PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    actions:PropTypes.object.isRequired



};

export default Consult;