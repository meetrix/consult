/**
 * Created by pubudud on 5/18/17.
 */

// Core modules
import { all } from 'redux-saga/effects';

// Sagas
import {takeEveryFetchSaga, takeLatestFetchSaga} from './fetchSaga';
import {takeEveryApiGateWaySaga} from './ApiGateWay/apiGateWaySaga'


/**
 * Root Saga for combining all other sagas
 */
export default function* rootSaga() {
    yield all([
        takeEveryFetchSaga(),
        takeLatestFetchSaga(),
        takeEveryApiGateWaySaga()
    ]);
}
