/**
 * Created by supun on 12/03/18.
 */
import {REDUX_API_GATEWAY_ACTIONS} from '../constants/apiGateWayConstant';
import {REDUX_ACTIONS} from "../constants/apiSagaConstant";

//import events from '../components/Calendar/example_events';
import moment from 'moment';

//intiate store
import {STORE_INITIATE_VALUE} from '../constants/initialstore'
var startDate,endDate,title,consultee,event,id;
//var event = [];

export default (state = STORE_INITIATE_VALUE.EVENT_INITIALE, action) => {
  let convertEvents=[];

  function createEventsArray(item) {
    console.log(item);
    id = item.id;
    startDate = moment(item.start).toDate();
    endDate = moment(item.end).toDate();
    title = item.title;
    if(item.consultee) consultee = item.consultee;
    event = {id:id,start:startDate,end:endDate,title:title,consultee:consultee}
    convertEvents.push(event)
  }
  switch (action.type) {
    case REDUX_API_GATEWAY_ACTIONS.GET_SCHEDULE_EVENT_SUCCESS: {

      console.log("state :"+state);
      console.log(action.payload);

       convertEvents = action.payload.Items.map((item)=>{
         console.log("item");
         console.log(item.start);

         startDate = moment(item.start).toDate();
         endDate = moment(item.end).toDate();
         title = item.title;
         users = item.users || [];
         if(item.consultee) consultee = item.consultee;
         return event = {id:item.id,start:startDate,end:endDate,title:title,consultee:consultee,users:users}
       });
      return {
        ...state,
            events: convertEvents
      }

      // return events;
    }
    case REDUX_API_GATEWAY_ACTIONS.POST_SCHEDULE_EVENT_SUCCESS: {
      createEventsArray(action.payload.Item);
      return{
        ...state,
        events: [
          ...state.events, ...convertEvents

        ]
      }
    }

    case REDUX_API_GATEWAY_ACTIONS.UPDATE_SCHEDULE_EVENT_SUCCESS: {
      let updatedEvent;
      let start,end,title,consultee;
      const updatedEvents = state.events.map(event=>{
        if(event.id == action.payload.Attributes.id){
          id = action.payload.Attributes.id;
          start = moment(action.payload.Attributes.start).toDate();
          end = moment(action.payload.Attributes.end).toDate();
          title = action.payload.Attributes.title;
          consultee = action.payload.Attributes.consultee;
          updatedEvent = {start:start,end:end,title:title,consultee:consultee};
          return updatedEvent;
        }
        return event;
      });
      return{
        ...state,
        events: [
           ...updatedEvents
        ]
      }
    }

    case REDUX_API_GATEWAY_ACTIONS.DELETE_SCHEDULE_EVENT_SUCCESS: {

      const updatedEvents = state.events.filter(event => event.id != action.payload.Key.id);
      return{
        ...state,
        events: [
          ...updatedEvents
        ]
      }
    }

    case REDUX_API_GATEWAY_ACTIONS.GET_FREE_EVENT_FROM_CONSULTANT_SUCCESS:
      convertEvents = action.payload.map((item)=>{
        startDate = moment(item.start).toDate();
        endDate = moment(item.end).toDate();
        title = item.title;
        if(item.consultee) consultee = item.consultee;
        return event = {id:item.id,start:startDate,end:endDate,title:title,consultee:consultee}
      });
      return{
        ...state,
        events:convertEvents

      }
    case REDUX_API_GATEWAY_ACTIONS.SCHEDULE_TIME_SLOT_CONSULTEE_SUCCESS:
      const updatedEvents = state.events.filter(event => event.id != action.args.event.id);
      return{
        ...state,
        events: updatedEvents

      }
    default:
      return state;
  }
};
