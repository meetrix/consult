/**
 * Created by supun on 23/02/18.
 */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


import {ACTION_KEY as KEYS,ACTION_ATTR as ATTRS ,USER_PROFILE }from '../../constants/constant'

import {actionCreatorFactory,actionCreateStoreUpdateFactory} from '../../actions/actionCreator'

import UserProfileView from './UserProfileView';

function mapStateToProps(state){
    return {
        user: state.auth.user
    }

}
const mapDispatchToProps = (dispatch) => ({
    actions:{
        signup:bindActionCreators(actionCreatorFactory(KEYS.SIGNUP, ATTRS.PAYLOAD),dispatch),
        updateFirstName:bindActionCreators(actionCreateStoreUpdateFactory(USER_PROFILE.UPDATE_FIRST_NAME, ATTRS.DATA),dispatch),
        updateLastName:bindActionCreators(actionCreateStoreUpdateFactory(USER_PROFILE.UPDATE_LAST_NAME, ATTRS.DATA),dispatch),
        updateEmail:bindActionCreators(actionCreateStoreUpdateFactory(USER_PROFILE.UPDATE_EMAIL, ATTRS.DATA),dispatch),
        updateImage:bindActionCreators(actionCreateStoreUpdateFactory(USER_PROFILE.UPDATE_IMAGE, ATTRS.DATA),dispatch),
        updateAddress:bindActionCreators(actionCreateStoreUpdateFactory(USER_PROFILE.UPDATE_ADDRESS, ATTRS.DATA),dispatch),
        updateSchool:bindActionCreators(actionCreateStoreUpdateFactory(USER_PROFILE.UPDATE_SCHOOL, ATTRS.DATA),dispatch),
        updateDistrict:bindActionCreators(actionCreateStoreUpdateFactory(USER_PROFILE.UPDATE_DISTRICT, ATTRS.DATA),dispatch),
        updateStream:bindActionCreators(actionCreateStoreUpdateFactory(USER_PROFILE.UPDATE_STREAM, ATTRS.DATA),dispatch),
        updateSubject:bindActionCreators(actionCreateStoreUpdateFactory(USER_PROFILE.UPDATE_SUBJECT, ATTRS.DATA),dispatch),
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileView);
