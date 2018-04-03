/**
 * Created by supun on 15/01/18.
 */

// constant
import { REDUX_ACTIONS, USER_PROFILE } from "../constants/apiSagaConstant";
import { STORE_INITIATE_VALUE } from "../constants/initialstore";
import { REDUX_AWS_AMPLIFY_ACTIONS } from "../constants/apiAmlifyConstant";
import { REDUX_API_GATEWAY_ACTIONS } from "../constants/apiGateWayConstant";

export default (state = STORE_INITIATE_VALUE.AUTH_INITIATE, action) => {
	switch (action.type) {
	case REDUX_ACTIONS.SET_LOGIN_DATA: {
		localStorage.setItem("token", action.payload.authHeader);
		return action.payload;
	}
	case REDUX_ACTIONS.HANDLE_LOGIN_DATA_FETCH_FAILURE: {
		// TODO when login error
		break;
	}

	case REDUX_ACTIONS.SET_SIGNUP_DATA: {
		// Otherwise, this is the one we want - return an updated value
		return {
			...state,
			...action.payload,
		};
	}
	case REDUX_ACTIONS.HANDLE_SIGNUP_DATA_FETCH_FAILURE: {
		// TODO when signup error
		break;
	}
	case USER_PROFILE.UPDATE_FIRST_NAME:
	case USER_PROFILE.UPDATE_EMAIL:
	case USER_PROFILE.UPDATE_LAST_NAME:
	case USER_PROFILE.UPDATE_IMAGE:
	case USER_PROFILE.UPDATE_SCHOOL:
	case USER_PROFILE.UPDATE_ADDRESS:
	case USER_PROFILE.UPDATE_DISTRICT:
	case USER_PROFILE.UPDATE_STREAM:
	case USER_PROFILE.UPDATE_SUBJECT: {
		return {
			...state,
			user: {
				...state.user,
				...action.data,

			},
		};
	}

	case REDUX_AWS_AMPLIFY_ACTIONS.GET_AUTH_USER_SUCCESS: {
		console.log(action);
		return {
			...state,
			user: {
				...state.user,
				...action.payload,

			},
		};
	}
	case REDUX_API_GATEWAY_ACTIONS.GET_AUTH_USER_INIT_DATA_SUCCESS: {
		console.log("initail dataaaa");
		console.log(action);
		return {
			...state,
			user: action.payload.Item,

		};
	}
	case REDUX_ACTIONS.CONSULTEE_TIME_SLOT_SELECT:
		return {
			...state,
			user: {
				...state.user,
				selectSlot: {
					timeSlot: action.payload.selectSlot,
					isTimeSlotSelect: action.data.isTimeSlotSelect,
				},
			},
		};
	case REDUX_API_GATEWAY_ACTIONS.GET_USER_NEXT_EVENT_SUCCESS:
		return {
			...state,
			user: {
				...state.user,
				nextEvent: action.payload.Items[0],
			},
		};
	default:
		return state;
	}
};
