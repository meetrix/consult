/**
 * Created by supun on 16/03/18.
 */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import PickTimeSlotView from './PickTimeSlotView'
import {REDUX_ACTIONS as ACTIONS,ACTION_ATTR as ATTRS  }from '../../constants/constant'
import {REDUX_API_GATEWAY_ACTIONS,ACTION_KEY as API_GATEWAY_KEYS } from '../../constants/apiGateWayConstant'

import {actionCreateStoreUpdateFactory,actionCreateApiGateWayFactory} from '../../actions/actionCreator'

function mapStateToProps(state){
  return {
    scheduler:state.scheduler,
    user:state.auth.user
  }

}
const mapDispatchToProps = (dispatch) => ({
  actions:{
    selectTimeSlot:bindActionCreators(actionCreateStoreUpdateFactory(ACTIONS.CONSULTEE_TIME_SLOT_SELECT, ATTRS.PAYLOAD,ATTRS.DATA),dispatch),
    scheduleConsult:bindActionCreators(actionCreateApiGateWayFactory(API_GATEWAY_KEYS.SCHEDULE_TIME_SLOT_CONSULTEE, ATTRS.PAYLOAD),dispatch),
    getScheduleEvents:bindActionCreators(actionCreateApiGateWayFactory(API_GATEWAY_KEYS.GET_SCHEDULE_EVENTS, ATTRS.PAYLOAD),dispatch),
    getFreeEventFromConsultant:bindActionCreators(actionCreateApiGateWayFactory(API_GATEWAY_KEYS.GET_FREE_EVENT_FROM_CONSULTANT, ATTRS.PAYLOAD),dispatch),
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(PickTimeSlotView);/**
 * Created by supun on 18/02/18.
 */
