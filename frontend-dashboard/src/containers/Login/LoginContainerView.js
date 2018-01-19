/**
 * Created by supun on 12/01/18.
 */

// Core modules
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Login from '../../views/Pages/Login'

class LoginContainerView extends Component {

    componentWillMount(){
        console.log("auth")
        console.log(this.props.auth)
    }
    render() {
        return(
            <Login auth={this.props.auth}  actions={this.props.actions} />
        )
    }
}

LoginContainerView.propTypes = {
    actions: PropTypes.object.isRequired,
    auth:PropTypes.array.isRequired

};

export default LoginContainerView;