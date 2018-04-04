import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ACTION_KEY as API_GATEWAY_ACTION, ACTION_ATTR as API_GATEWAY_ATTRS } from '../../constants/apiGateWayConstant';

import { actionCreateApiGateWayFactory } from '../../actions/actionCreator';

import DashBoardView from './DashBoardView';

function mapStateToProps(state) {
  return {
    auth: state.auth,
    scheduler: state.scheduler,
  };
}
const mapDispatchToProps = dispatch => ({
  // TODO
  actions: {
    getFreeEventFromConsultant: bindActionCreators(actionCreateApiGateWayFactory(API_GATEWAY_ACTION.GET_FREE_EVENT_FROM_CONSULTANT, API_GATEWAY_ATTRS.PAYLOAD), dispatch),
    getNextEvent: bindActionCreators(actionCreateApiGateWayFactory(API_GATEWAY_ACTION.GET_USER_NEXT_EVENT, API_GATEWAY_ATTRS.PAYLOAD), dispatch),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DashBoardView);
