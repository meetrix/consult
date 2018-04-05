/**
 * Created by supun on 08/01/18.
 */
import { REDUX_ACTIONS } from '../constants/apiSagaConstant';
import { REDUX_API_GATEWAY_ACTIONS } from '../constants/apiGateWayConstant';
import STORE_INITIATE_VALUE from '../constants/initialstore';

export default (state = STORE_INITIATE_VALUE.CONSULTANT_INITIATE, action) => {
  switch (action.type) {
    case REDUX_ACTIONS.SET_CONSULTS_DATA: {
      return action.payload.data;
    }
    case REDUX_ACTIONS.HANDLE_CONSULTS_DATA_FETCH_FAILURE: {
      return {
        name: 'DEFAULT_TUTOR_NAME',
        age: 10,
      };
    }
    case REDUX_API_GATEWAY_ACTIONS.GET_SUGGEST_CONSULTANT_SUCCESS: {
      return action.payload.Items;
    }
    default:
      return state;
  }
};
