/**
 * Created by supun on 13/03/18.
 */

import Amplify, { API, Auth } from "aws-amplify";
import { REDUX_ACTIONS as ACTION_TYPE, ACTION_ATTR as ATTRS } from "../constants/apiSagaConstant";


export const setAuthUser = () => ({
	action: ACTION_TYPE.SET_AUTH_USER,
	payload: getAuthUser(),
});

export const getAuthUser = async () => {
	const auth = await Auth.currentUserInfo();

	return {
		action: ACTION_TYPE.SET_AUTH_USER,
		payload: auth,
	};
};
