/**
 * Created by supun on 07/02/18.
 */

import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Register from '../../views/Pages/Register/Register';

class SignUpView extends Component{

    render(){
        return(
            <Register auth={this.props.auth}  actions={this.props.actions}/>
        );
    }

}
SignUpView.propTypes = {
    actions: PropTypes.object.isRequired,
    auth:PropTypes.array.isRequired

};

export default SignUpView;