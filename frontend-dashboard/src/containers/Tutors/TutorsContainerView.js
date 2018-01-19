/**
 * Created by supun on 08/01/18.
 */

// Core modules
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Tutors from '../../components/Tutors/Tutors'

class TutorsContainerView extends Component {

    componentWillMount(){
        this.props.actions.getTutors({id:1});
    }
    render() {
        return(
            <Tutors tutors={this.props.tutors} actions={this.props.actions} />
        )
    }
}

TutorsContainerView.propTypes = {
    tutors: PropTypes.arrayOf(PropTypes.shape({
            id:PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,


    })),
    actions: PropTypes.object.isRequired

};

export default TutorsContainerView;