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
    case REDUX_API_GATEWAY_ACTIONS.GET_CONSULTANTS_SUCCESS: {
      return {
        ...state,
        consultants: action.payload.Items,
      };
    }
    case REDUX_API_GATEWAY_ACTIONS.GET_CONSULTEES_SUCCESS: {
      return {
        ...state,
        consultees: action.payload.Items,
      };
    }
    case REDUX_API_GATEWAY_ACTIONS.UPDATE_RELATED_USERS_SUCCESS: {
      return {
        ...state,
        consultees: [state.consultees, ...action.payload.consultee_db],
        consultants: [state.consultants, ...action.payload.consultant_db],
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
