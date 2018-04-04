/**
 * Created by supun on 23/02/18.
 */
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { ACTION_KEY as KEYS, ACTION_ATTR as ATTRS, USER_PROFILE } from '../../constants/apiSagaConstant';

import {
  actionCreatorFactory, actionCreateStoreUpdateFactory,
  actionCreateApiGateWayFactory,
} from '../../actions/actionCreator';

import UserProfileView from '../../components/User/UserProfile';
import { ACTION_ATTR as API_GATEWAY_ATTRS, ACTION_KEY as API_GATEWAY_KEYS } from '../../constants/apiGateWayConstant';

function mapStateToProps(state) {
  return {
    user: state.auth.user,
  };
}
const mapDispatchToProps = dispatch => ({
  actions: {
    signup: bindActionCreators(actionCreatorFactory(KEYS.SIGNUP, ATTRS.PAYLOAD), dispatch),
    updateProfileInfo: bindActionCreators(actionCreateApiGateWayFactory(API_GATEWAY_KEYS.UPDATE_PROFILE_INFO, API_GATEWAY_ATTRS.PAYLOAD), dispatch),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileView);
