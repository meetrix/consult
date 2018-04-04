/**
 * Created by supun on 09/01/18.
 */

import { put, takeEvery, call, takeLatest } from 'redux-saga/effects';
import { REDUX_ACTIONS, HTTP_METHODS } from '../../constants/apiSagaConstant';
import metadata from './metadata';
import fetch from '../../helpers/fetchWrapper';


function fetchHandler({ key, payload }) {
  let {
    url,
  } = metadata[key];
  const {
    options, failureAction, successAction,
  } = metadata[key];
  /* Note - metadata will not be validated here expecting that
   the metadata file is perfect and predictable */

  // Cloned to avoid later assigned values being persistent across requests
  const optionsClone = { ...options };
  const payloadClone = { ...payload };
  const pathTokens = url.split('/:');

  // Cater for path parameters
  // Note - This code block must appear before params/body is assigned to optionsClone object
  if (url.indexOf('/:') !== 0) {
    pathTokens.shift();
  }

  pathTokens.forEach((token) => {
    const paramKey = token.split('/')[0];
    url = url.replace(`/:${paramKey}`, `/${payloadClone[paramKey]}`);

    // Assume that same data will not be sent as both path param and query/body
    delete payloadClone[paramKey];
  });

  if (optionsClone.method === HTTP_METHODS.GET) {
    optionsClone.params = { ...payloadClone, ...optionsClone.params };
  } else {
    optionsClone.body = { ...payloadClone, ...optionsClone.body };
  }

  return new Promise((resolve, reject) => {
    fetch(url, optionsClone)
      .then(res => resolve({
        successAction,
        res,

      }))
      .catch(err => reject(new Error({
        failureAction,
        err,
      })));
  });
}


function* fetchAsync(action) {
  try {
    const reply = yield call(fetchHandler, action);
    yield put({ ...action, type: REDUX_ACTIONS.FETCHING_SUCCESS });
    /* eslint max-len: ["error", { "code": 180 }] */
    yield put({ type: reply.successAction, payload: reply.res.data, args: { ...action.payload, ...action.args } });
  } catch (reply) {
    yield put({ ...action, type: REDUX_ACTIONS.FETCHING_FAILURE });
    yield put({ type: reply.failureAction, payload: reply.err.data, args: { ...action.payload, ...action.args } });
  }
}
export function* takeEveryFetchSaga() {
  yield takeEvery(REDUX_ACTIONS.FETCHING, fetchAsync);
}
export function* takeLatestFetchSaga() {
  yield takeLatest(REDUX_ACTIONS.FETCH_LATEST, fetchAsync);
}
