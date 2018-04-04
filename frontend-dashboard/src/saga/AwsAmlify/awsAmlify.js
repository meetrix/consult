/**
 * Created by supun on 14/03/18.
 */
import { put, takeEvery, call } from 'redux-saga/effects';
import { REDUX_AWS_AMPLIFY_ACTIONS } from '../../constants/apiAmlifyConstant';
import metadata from './metadata';
import { api } from './api';


function AwsAmplifyHandler({ key }) {
  const { method, failureAction, successAction } = metadata[key];
  return api(method, failureAction, successAction);
}
function* AwsAmplifyActionHandler(action) {
  try {
    const reply = yield call(AwsAmplifyHandler, action);
    yield put({ ...action, type: REDUX_AWS_AMPLIFY_ACTIONS.AWS_AMPLIFY_FETCHING_SUCCESS });
    /* eslint max-len: ["error", { "code": 180 }] */
    yield put({ type: reply.successAction, payload: reply.res, args: { ...action.payload, ...action.args } });
  } catch (reply) {
    yield put({ ...action, type: REDUX_AWS_AMPLIFY_ACTIONS.AWS_AMPLIFY_FETCHING_FAILURE });
    yield put({ type: reply.failureAction, payload: reply.err, args: { ...action.payload, ...action.args } });
  }
}

/**
 * Saga: Capture all API_SOCKET_EMIT actions and call method to handle side-effects
 */
export default function* takeEveryAwsAmplifySaga() {
  yield takeEvery(REDUX_AWS_AMPLIFY_ACTIONS.AWS_AMPLIFY_FETCHING, AwsAmplifyActionHandler);
}

