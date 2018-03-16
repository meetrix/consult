/**
 * Created by supun on 12/03/18.
 */
import {REDUX_API_GATEWAY_ACTIONS} from '../constants/apiGateWayConstant';
import {SCHEDULAR_FORM} from "../constants/constant";

//import events from '../components/Calendar/example_events';
import moment from 'moment';

var events = [{
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
  }];

var startDate,endDate,title,consultee,event;
//var event = [];

export default (state = events, action) => {
  console.log("Schedular Reducer");
  console.log(action.type);
  let convertEvents=[];

  function createEventsArray(item) {
    startDate = moment(item.start).toDate();
    endDate = moment(item.end).toDate();
    title = item.title;
    if(item.consultee) consultee = item.consultee;
    event = {start:startDate,end:endDate,title:title,consultee:consultee}
    convertEvents.push(event)
  }
  switch (action.type) {
    case REDUX_API_GATEWAY_ACTIONS.GET_SCHEDULE_EVENT_SUCCESS: {
      console.log("state :"+state)
      console.log("Success Action Payload" + action.payload);

       action.payload.Items.map(createEventsArray);
      return[
        ...state,...convertEvents
      ]
      // return events;
    }
    case REDUX_API_GATEWAY_ACTIONS.POST_SCHEDULE_EVENT_SUCCESS: {
      createEventsArray(action.payload.Item);
      return [...state,...convertEvents];
    }
    case SCHEDULAR_FORM.UPDATE_STARTDATE :{
      return [{start:action.data}]
    }

    default:
      return state;
  }
};
