/**
 * Created by supun on 08/01/18.
 */

// Core modules
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Consults from '../../components/Consults/Consults'

class ConsultsView extends Component {

    componentWillMount(){
        this.props.actions.getConsults();
    }
    render() {
        return(
            <Consults consults={this.props.consults} actions={this.props.actions} />
        )
    }
}

ConsultsView.propTypes = {
    consults: PropTypes.arrayOf(PropTypes.shape({
            _id:PropTypes.string.isRequired,
        username: PropTypes.string.isRequired,


    })),
    actions: PropTypes.object.isRequired

};

export default ConsultsView;