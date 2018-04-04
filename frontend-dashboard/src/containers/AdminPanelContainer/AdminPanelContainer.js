import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreateApiGateWayFactory, actionCreateStoreUpdateFactory } from '../../actions/actionCreator';

import { ACTION_KEY as API_GATEWAY_KEYS, ACTION_ATTR as API_GATEWAY_ATTR } from '../../constants/apiGateWayConstant';
import { REDUX_ACTIONS, ACTION_ATTR } from '../../constants/apiSagaConstant';

import AdminPanelView from '../../components/AdminPanel/AdminPanel';


function mapStateToProps(state) {
  console.log('AdminPanelConatiner');
  return {
    user: state.auth.user,
    admin: state.admin,
  };
}

const mapDispatchToProps = dispatch => ({
  actions: {
    getConsultants: bindActionCreators(actionCreateApiGateWayFactory(API_GATEWAY_KEYS.GET_CONSULTANTS, API_GATEWAY_ATTR.PAYLOAD), dispatch),
    getConsultees: bindActionCreators(actionCreateApiGateWayFactory(API_GATEWAY_KEYS.GET_CONSULTEES, API_GATEWAY_ATTR.PAYLOAD), dispatch),
    setConsultantId: bindActionCreators(actionCreateStoreUpdateFactory(REDUX_ACTIONS.SET_CONSULTANT_ID, ACTION_ATTR.PAYLOAD), dispatch),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminPanelView);
