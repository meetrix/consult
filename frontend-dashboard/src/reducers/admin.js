import {REDUX_API_GATEWAY_ACTIONS} from "../constants/apiGateWayConstant";
import {REDUX_ACTIONS} from "../constants/apiSagaConstant";

var admin = {consultants:[{
    id: 1,
    role : "teacher",
    events:[],
    consultee:[],
  }],consultees:[{
    id:1,
    role:"student",
    events:[],
    consultants:[]
  }]};

export default (state=admin,action) => {
    switch (action.type){
      case REDUX_API_GATEWAY_ACTIONS.GET_CONSULTANTS_SUCCESS:{
        console.log("admin reducer consultant payload: "+action.payload.Items);
        return {
          ...state,
          consultants:action.payload.Items,
        }
      }
      break;
      case REDUX_API_GATEWAY_ACTIONS.GET_CONSULTEES_SUCCESS:{
        console.log("admin reducer consultee payload: "+action.payload.Items);
        return {
          ...state,
          consultees:action.payload.Items,
        }
      }
        break;
      case REDUX_ACTIONS.SET_CONSULTANT_ID:{
        return{
          ...state,
          consultantId:action.payload.id
        }
      }
      default: return state;
    }
}
