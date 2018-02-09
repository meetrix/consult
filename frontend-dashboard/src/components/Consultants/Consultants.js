/**
 * Created by supun on 08/01/18.
 */
/**
 * Created by supun on 08/01/18.
 */

// Core modules
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Consultant from './/Consultant'

class Consultants extends Component {

    render() {
        return(
            <div >
                {this.props.consultants.map(consultant =>
                    <Consultant
                        key={consultant._id}
                        {...consultant}
                        actions={this.props.actions}
                    />)}
            </div>


        )
    }
}

Consultants.propTypes = {
    consultants: PropTypes.arrayOf(PropTypes.shape({
        _id:PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,


    })),
    actions: PropTypes.object.isRequired

};

export default Consultants;