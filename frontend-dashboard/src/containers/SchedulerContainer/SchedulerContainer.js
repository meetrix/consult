/**
 * Created by supun on 12/03/18.
 */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//React Component
import CalendarView from '../../components/Calendar/Calendar';

import {ACTION_KEY as API_GATEWAY_KEYS,ACTION_ATTR as API_GATEWAY_ATTRS  }from '../../constants/apiGateWayConstant';
import {actionCreateApiGateWayFactory, actionCreateStoreUpdateFactory} from '../../actions/actionCreator';

//events json
import events from '../../components/Calendar/example_events';
import {ACTION_ATTR, REDUX_ACTIONS, SCHEDULAR_FORM} from "../../constants/apiSagaConstant";

function mapStateToProps(state){
  console.log(state.scheduler);
  return {
    events:state.scheduler.events,
    user:state.auth.user,
    consultees:state.scheduler.consultees
  }

}
const mapDispatchToProps = (dispatch) => ({
  actions:{
    getScheduleEvents:bindActionCreators(actionCreateApiGateWayFactory(API_GATEWAY_KEYS.GET_SCHEDULE_EVENTS, API_GATEWAY_ATTRS.PAYLOAD),dispatch),
    postScheduleEvents:bindActionCreators(actionCreateApiGateWayFactory(API_GATEWAY_KEYS.POST_SCHEDULE_EVENTS,API_GATEWAY_ATTRS.PAYLOAD),dispatch),
    updateScheduleEvents:bindActionCreators(actionCreateApiGateWayFactory(API_GATEWAY_KEYS.UPDATE_SCHEDULE_EVENTS,API_GATEWAY_ATTRS.PAYLOAD),dispatch),
    deleteScheduleEvents:bindActionCreators(actionCreateApiGateWayFactory(API_GATEWAY_KEYS.DELETE_SCHEDULE_EVENTS,API_GATEWAY_ATTRS.PAYLOAD),dispatch),
    updateStartDate:bindActionCreators(actionCreateStoreUpdateFactory(SCHEDULAR_FORM.UPDATE_STARTDATE,ACTION_ATTR.DATA),dispatch),
    updateEndDate:bindActionCreators(actionCreateStoreUpdateFactory(SCHEDULAR_FORM.UPDATE_ENDDATE,ACTION_ATTR.DATA),dispatch),
    setConsultees:bindActionCreators(actionCreateStoreUpdateFactory(REDUX_ACTIONS.SET_CONSULTEES,ACTION_ATTR.DATA),dispatch),
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CalendarView);/**
 /* Created by supun on 18/02/18.*/
