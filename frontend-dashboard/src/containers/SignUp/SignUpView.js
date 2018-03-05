/**
 * Created by supun on 07/02/18.
 */

import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Register from '../../views/Pages/Register/Register';

class SignUpView extends Component{

    render(){
        return(

            <Register actions={this.props.actions}/>

        );
    }

}
SignUpView.propTypes = {
    actions: PropTypes.object.isRequired,


};

export default SignUpView;