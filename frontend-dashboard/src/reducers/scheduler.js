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

var startDate,endDate,title;
//var event = [];

export default (state = events, action) => {
  console.log("Schedular Reducer");
  console.log(action.type);
  switch (action.type) {
    case REDUX_API_GATEWAY_ACTIONS.GET_SCHEDULE_EVENT_SUCCESS: {
      console.log("state :"+state)
      console.log("Success Action Payload" + action.payload);
      startDate = moment(action.payload.Items[0].start).toDate();
      endDate = moment(action.payload.Items[0].end).toDate();
      title = action.payload.Items[0].title;
      events = [{start:startDate,end:endDate,title:title}];


    }
    case REDUX_API_GATEWAY_ACTIONS.POST_SCHEDULE_EVENT_SUCCESS: {
      // return {
      //   ...state,
      //   arr: [...state.arr,action.payload.Item]
      // }

      return events;
    }
    case SCHEDULAR_FORM.UPDATE_STARTDATE :{
      return [{start:action.data}]
    }

    default:
      return state;
  }
};
