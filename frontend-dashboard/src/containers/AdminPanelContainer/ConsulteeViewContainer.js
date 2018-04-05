import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreateApiGateWayFactory } from '../../actions/actionCreator';

import { ACTION_KEY as API_GATEWAY_KEYS, ACTION_ATTR as API_GATEWAY_ATTR } from '../../constants/apiGateWayConstant';
import ConsulteeView from '../../components/AdminPanel/ConsulteeView';

function mapStateToProps(state) {
  return ({
    user: state.auth.user,
    admin: state.admin,
  });
}
const mapDispatchToProps =(dispatch)=>({
  action:{
    getConsultants: bindActionCreators(actionCreateApiGateWayFactory(API_GATEWAY_KEYS.GET_CONSULTANTS,API_GATEWAY_ATTR.PAYLOAD),dispatch),
    updateRelatedUsers: bindActionCreators(actionCreateApiGateWayFactory(API_GATEWAY_KEYS.UPDATE_RELATED_USERS,API_GATEWAY_ATTR.PAYLOAD,API_GATEWAY_ATTR.DATA),dispatch),

  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ConsulteeView);
