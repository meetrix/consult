/**
 * Created by supun on 10/03/18.
 */
import { put, takeEvery, call, takeLatest, select } from "redux-saga/effects";
import { REDUX_API_GATEWAY_ACTIONS } from "../../constants/apiGateWayConstant";
import metadata from "./metadata";
import { API, Auth } from "aws-amplify";

import { api } from "./api";

/**
 * Perform a socket send based on the meta data available corresponding to the request type
 *
 * @param {string} key - ws event key determine correct meta data
 * @param {string} payload - payload to be sent by ws client
 */
function apiGateWayHandler({ key, payload }) {
	// console.log("apiGatewayHandler");
	// console.log(key)
	const {
		method, endPoint, apiRoute, failureAction, successAction,
	} = metadata[key];

	return Auth.currentSession().then((idToken) => {
		// console.log(payload)
		const token = idToken.idToken.jwtToken;
		// const options = {
		//   headers: {
		//     Authorization: idToken.idToken.jwtToken,
		//   },
		//   body:payload
		// }

		return api(method, endPoint, apiRoute, failureAction, successAction, token, payload);
	});
}

/**
 * Saga Side-Effects Handler
 * @param {object} action - redux action
 */
function* apiGateWayActionHandler(action) {
	try {
		const reply = yield call(apiGateWayHandler, action);
		yield put({ ...action, type: REDUX_API_GATEWAY_ACTIONS.API_GATEWAY_FETCHING_SUCCESS });
		// console.log("reply")
		// console.log(reply)
		yield put({ type: reply.successAction, payload: reply.res, args: { ...action.payload, ...action.args } });
	} catch (reply) {
		yield put({ ...action, type: REDUX_API_GATEWAY_ACTIONS.API_GATEWAY_FETCHING_FAILURE });
		yield put({ type: reply.failureAction, payload: reply.err, args: { ...action.payload, ...action.args } });
	}
}

/**
 * Saga: Capture all API_SOCKET_EMIT actions and call method to handle side-effects
 */
export function* takeEveryApiGateWaySaga() {
	yield takeEvery(REDUX_API_GATEWAY_ACTIONS.API_GATEWAY_FETCHING, apiGateWayActionHandler);
}
