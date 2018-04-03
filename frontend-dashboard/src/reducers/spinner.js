// constant
import { REDUX_ACTIONS } from "../constants/apiSagaConstant";
import { REDUX_API_GATEWAY_ACTIONS } from "../constants/apiGateWayConstant";
import { REDUX_AWS_AMPLIFY_ACTIONS } from "../constants/apiAmlifyConstant";
import { STORE_INITIATE_VALUE } from "../constants/initialstore";

export default (state = STORE_INITIATE_VALUE.SPINNER_INITIATE, action) => {
	switch (action.type) {
	case REDUX_ACTIONS.FETCHING:
	case REDUX_API_GATEWAY_ACTIONS.API_GATEWAY_FETCHING:
	case REDUX_AWS_AMPLIFY_ACTIONS.AWS_AMPLIFY_FETCHING:
		return { value: true };
	case REDUX_ACTIONS.FETCHING_SUCCESS:
	case REDUX_ACTIONS.FETCHING_FAILURE:
	case REDUX_API_GATEWAY_ACTIONS.API_GATEWAY_FETCHING_SUCCESS:
	case REDUX_AWS_AMPLIFY_ACTIONS.AWS_AMPLIFY_FETCHING_SUCCESS:
	case REDUX_API_GATEWAY_ACTIONS.API_GATEWAY_FETCHING_FAILURE:
	case REDUX_AWS_AMPLIFY_ACTIONS.AWS_AMPLIFY_FETCHING_FAILURE:
		return { value: false };

	default:
		return state;
	}
};
