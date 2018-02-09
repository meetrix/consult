/**
 * Created by supun on 08/01/18.
 */
/**
 * Created by supun on 08/01/18.
 */

// Core modules
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Consult from '../Consult/Consult'

class Consults extends Component {

    render() {
        return(
            <div >
                {this.props.consults.map(consult =>
                    <Consult
                        key={consult._id}
                        {...consult}
                        actions={this.props.actions}
                    />)}
            </div>


        )
    }
}

Consults.propTypes = {
    consults: PropTypes.arrayOf(PropTypes.shape({
        _id:PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,


    })),
    actions: PropTypes.object.isRequired

};

export default Consults;