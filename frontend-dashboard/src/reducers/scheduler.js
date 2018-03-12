/**
 * Created by supun on 12/03/18.
 */
import {REDUX_API_GATEWAY_ACTIONS} from '../constants/apiGateWayConstant';

import events from '../components/Calendar/example_events';
export default (state = events, action) => {
  switch (action.type) {
    case REDUX_API_GATEWAY_ACTIONS.GET_SCHEDULE_EVENT_SUCCESS: {
      return action.payload;
    }

    default:
      return state;
  }
};
