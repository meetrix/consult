/**
 * Created by supun on 12/03/18.
 */
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//React Component
import CalendarView from '../../components/Calendar/Calendar';

import {ACTION_KEY as API_GATEWAY_KEYS,ACTION_ATTR as API_GATEWAY_ATTRS  }from '../../constants/apiGateWayConstant';
import {actionCreateApiGateWayFactory} from '../../actions/actionCreator';

//events json
import events from '../../components/Calendar/example_events';
import {ACTION_ATTR, SCHEDULAR_FORM} from "../../constants/constant";

function mapStateToProps(state){
  return {
    events:state.schedule ,
  }

}
const mapDispatchToProps = (dispatch) => ({
  actions:{getScheduleEvents:bindActionCreators(actionCreateApiGateWayFactory(API_GATEWAY_KEYS.GET_SCHEDULE_EVENTS, API_GATEWAY_ATTRS.PAYLOAD),dispatch),
    postScheduleEvents:bindActionCreators(actionCreateApiGateWayFactory(API_GATEWAY_KEYS.POST_SCHEDULE_EVENTS,API_GATEWAY_ATTRS.PAYLOAD),dispatch),
    updateStartDate:bindActionCreators(actionCreateApiGateWayFactory(SCHEDULAR_FORM.UPDATE_STARTDATE,ACTION_ATTR),dispatch),
    updateEndDate:bindActionCreators(actionCreateApiGateWayFactory(SCHEDULAR_FORM.UPDATE_ENDDATE,ACTION_ATTR.DATA),dispatch)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CalendarView);/**
 /* Created by supun on 18/02/18.*/
