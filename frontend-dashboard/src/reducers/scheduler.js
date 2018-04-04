/**
 * Created by supun on 12/03/18.
 */
// core library
import moment from 'moment';

// constant
import { REDUX_API_GATEWAY_ACTIONS } from '../constants/apiGateWayConstant';

// intiate store constant
import { STORE_INITIATE_VALUE } from '../constants/initialstore';
import { REDUX_ACTIONS } from '../constants/apiSagaConstant';

// convert event
export const convertEvent = (item) => {
  console.log(`convert Event id ${item.id}`);
  const event = {};
  event.id = item.id;
  event.start = moment(item.start).toDate();
  event.end = moment(item.end).toDate();
  event.title = item.title;
  return event;
};

export default (state = STORE_INITIATE_VALUE.EVENT_INITIALE, action) => {
  switch (action.type) {
    case REDUX_API_GATEWAY_ACTIONS.GET_SCHEDULE_EVENT_SUCCESS: {
      const convertEvents = action.payload.Responses.Event.map(item => convertEvent(item));
      return {
        ...state,
        events: convertEvents,
      };
    }
    case REDUX_API_GATEWAY_ACTIONS.POST_SCHEDULE_EVENT_SUCCESS: {
      const convertEvents = [convertEvent(action.payload.params.Item)];
      console.log(`return convertEvents: ${convertEvents.id}`);
      return {
        ...state,
        events: [
          ...state.events, ...convertEvents,

        ],
      };
    }

    case REDUX_API_GATEWAY_ACTIONS.UPDATE_SCHEDULE_EVENT_SUCCESS: {
      const updatedEvents = state.events.map((event) => {
        if (event.id == action.payload.Attributes.id) {
          return convertEvent(action.payload.Attributes);
        }
        return event;
      });
      return {
        ...state,
        events: [
          ...updatedEvents,
        ],
      };
    }

    case REDUX_API_GATEWAY_ACTIONS.DELETE_SCHEDULE_EVENT_SUCCESS: {
      const updatedEvents = state.events.filter(event => event.id != action.payload.Key.id);
      return {
        ...state,
        events: [
          ...updatedEvents,
        ],
      };
    }

    case REDUX_API_GATEWAY_ACTIONS.GET_FREE_EVENT_FROM_CONSULTANT_SUCCESS:
      const convertEvents = action.payload.map(item => convertEvent(item));
      return {
        ...state,
        events: convertEvents,

      };
    case REDUX_API_GATEWAY_ACTIONS.SCHEDULE_TIME_SLOT_CONSULTEE_SUCCESS:
      const updatedEvents = state.events.filter(event => event.id != action.args.event.id);
      return {
        ...state,
        events: updatedEvents,

      };
    case REDUX_ACTIONS.SET_CONSULTEES: {
      return {
        ...state,
        consultees: action.data,
      };
    }
    default:
      return state;
  }
};
