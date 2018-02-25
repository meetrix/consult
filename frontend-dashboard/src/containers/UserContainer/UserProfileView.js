/**
 * Created by supun on 23/02/18.
 */
import React,{Component} from 'react';
import PropTypes from 'prop-types';

import UserProfile from '../../components/User/UserProfile'

class UserProfileView extends Component{

    constructor(props){
        super(props);
    }
    render(){
        return(

            <UserProfile {...this.props.user}/>
        );
    }

}
UserProfileView.propTypes = {
        user:PropTypes.object.isRequired
}

export default UserProfileView;