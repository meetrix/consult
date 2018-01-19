/**
 * Created by supun on 08/01/18.
 */
/**
 * Created by supun on 08/01/18.
 */

// Core modules
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Tutor from '../Tutor/Tutor'

class Tutors extends Component {

    render() {
        return(
            <ul>
                {this.props.tutors.map(tutor =>
                    <Tutor
                        key={tutor.id}
                        {...tutor}
                        actions={this.props.actions}
                    />)}
            </ul>


        )
    }
}

Tutors.propTypes = {
    tutors: PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,


    })),
    actions: PropTypes.object.isRequired

};

export default Tutors;