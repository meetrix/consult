/**
 * Created by supun on 12/03/18.
 */
import {REDUX_API_GATEWAY_ACTIONS} from '../constants/apiGateWayConstant';
import {REDUX_ACTIONS} from "../constants/constant";

//import events from '../components/Calendar/example_events';
import moment from 'moment';

var scheduler = {events:[{
  id: 0,
  title: 'All Day Event very long title',
  allDay: true,
  start: new Date(2015, 3, 0),
  end: new Date(2015, 3, 1),
},
  {
    id: 1,
    title: 'Birthday Party',
    start: new Date(2015, 3, 13, 7, 0, 0),
    end: new Date(2015, 3, 13, 10, 30, 0),
  }],
  consulteeSelectSlot:{
    isTimeSlotSelect:false,
    timeSlot:{

    }
  }

};

var startDate,endDate,title,consultee,event,id;
//var event = [];

export default (state = scheduler, action) => {
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
       convertEvents = action.payload.Items.map((item)=>{
         startDate = moment(item.start).toDate();
         endDate = moment(item.end).toDate();
         title = item.title;
         if(item.consultee) consultee = item.consultee;
         return event = {id:item.id,start:startDate,end:endDate,title:title,consultee:consultee}
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
      createEventsArray(action.payload.Attributes);
      return{
        ...state,
        events: [
          ...state.events, ...convertEvents

        ]
      }
    }
    case REDUX_ACTIONS.CONSULTEE_TIME_SLOT_SELECT:
      return{
        ...state,
        consulteeSelectSlot:{
          timeSlot: action.payload.selectSlot,
          isTimeSlotSelect: action.data.isTimeSlotSelect
        }
      }

      break;
    default:
      return state;
  }
};
