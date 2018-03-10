/**
 * Created by pubudud on 5/18/17.
 */

// Core modules
import { all } from 'redux-saga/effects';

// Sagas
import {takeEveryFetchSaga, takeLatestFetchSaga} from './universalSagas/fetch/fetchSaga';
import {takeEveryApiSocketSaga} from './universalSagas/socket/apiSocketSaga';

/**
 * Root Saga for combining all other sagas
 */
export default function* rootSaga() {
    yield all([
        takeEveryFetchSaga(),
        takeLatestFetchSaga(),
        takeEveryApiSocketSaga()
    ]);
}
