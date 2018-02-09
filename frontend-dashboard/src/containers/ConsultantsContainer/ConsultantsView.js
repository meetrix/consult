/**
 * Created by supun on 08/01/18.
 */

// Core modules
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Consultants from '../../components/Consultants/Consultants'

class ConsultantsView extends Component {

    componentWillMount(){
        this.props.actions.getConsultants();
    }
    render() {
        return(
            <Consultants consultants={this.props.consultants} actions={this.props.actions} />
        )
    }
}

ConsultantsView.propTypes = {
    consultants: PropTypes.arrayOf(PropTypes.shape({
            _id:PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,


    })),
    actions: PropTypes.object.isRequired

};

export default ConsultantsView;