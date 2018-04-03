/**
 * Created by supun on 10/01/18.
 */
import { ACTION_KEY as KEYS, REDUX_ACTIONS as ACTIONS, URLS, HTTP_METHODS, FETCH_KEYS } from "../../constants/apiSagaConstant";


const metadata = {};
metadata[KEYS.CONSULTS] = {
	url: URLS.CONSULTS,
	options: {
		method: HTTP_METHODS.GET,
	},
	failureAction: ACTIONS.HANDLE_CONSULTS_DATA_FETCH_FAILURE,
	successAction: ACTIONS.SET_CONSULTS_DATA,
};
export default metadata;
