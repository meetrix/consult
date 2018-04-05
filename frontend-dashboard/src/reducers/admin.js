import { REDUX_API_GATEWAY_ACTIONS } from '../constants/apiGateWayConstant';
import { REDUX_ACTIONS } from '../constants/apiSagaConstant';

const admin = {
  consultants: [{
    id: 1,
    role: 'teacher',
    events: [],
    consultee: [],
  }],
  consultees: [{
    id: 1,
    role: 'student',
    events: [],
    firstName: 'Yasith',
    consultants: [],
  }],
};
export default (state = admin, action) => {
  switch (action.type) {
    case REDUX_API_GATEWAY_ACTIONS.GET_CONSULTEES_SUCCESS: {
      return {
        ...state,
        consultees: action.payload.Items,
      };
    }
    case REDUX_API_GATEWAY_ACTIONS.UPDATE_RELATED_USERS_SUCCESS: {
      const updatedConsultants = state.consultants.map((consultant, index) => {
        if (index === action.args.data.index) {
          return action.payload.consultant_db.Attributes;
        }
        return consultant;
      });
      return {
        ...state,
        consultants: updatedConsultants,
      };
    }
    case REDUX_ACTIONS.SET_CONSULTANT_ID: {
      return {
        ...state,
        consultantId: action.payload,
      };
    }
    default: return state;
  }
};
