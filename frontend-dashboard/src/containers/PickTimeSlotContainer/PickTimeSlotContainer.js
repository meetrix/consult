/**
 * Created by supun on 16/03/18.
 */
// core library
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// view
import PickTimeSlotView from './PickTimeSlotView';

// constant
import { REDUX_ACTIONS as ACTIONS, ACTION_ATTR as ATTRS } from '../../constants/apiSagaConstant';
import { ACTION_KEY as API_GATEWAY_KEYS, ACTION_ATTR as API_GATEWAY_ATTRS } from '../../constants/apiGateWayConstant';

// action creator
import { actionCreateStoreUpdateFactory, actionCreateApiGateWayFactory } from '../../actions/actionCreator';

function mapStateToProps(state) {
  return {
    scheduler: state.scheduler,
    user: state.auth.user,
  };
}
const mapDispatchToProps = dispatch => ({
  actions: {
    /* eslint max-len : 0 */
    selectTimeSlot: bindActionCreators(actionCreateStoreUpdateFactory(ACTIONS.CONSULTEE_TIME_SLOT_SELECT, ATTRS.PAYLOAD, ATTRS.DATA), dispatch),
    scheduleConsultant: bindActionCreators(actionCreateApiGateWayFactory(API_GATEWAY_KEYS.SCHEDULE_TIME_SLOT_CONSULTEE, API_GATEWAY_ATTRS.PAYLOAD), dispatch),
    getScheduleEvents: bindActionCreators(actionCreateApiGateWayFactory(API_GATEWAY_KEYS.GET_SCHEDULE_EVENTS, API_GATEWAY_ATTRS.PAYLOAD), dispatch),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PickTimeSlotView);/**
 * Created by supun on 18/02/18.
 */
