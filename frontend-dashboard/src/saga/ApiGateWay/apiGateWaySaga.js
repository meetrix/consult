/**
 * Created by supun on 10/03/18.
 */
import {call, takeEvery} from 'redux-saga/effects';
import {REDUX_API_GATEWAY_ACTIONS} from '../../constants/apiGateWayConstant';
import metadata from './metadata';
import {API, Auth} from 'aws-amplify';

/**
 * Perform a socket send based on the meta data available corresponding to the request type
 *
 * @param {string} key - ws event key determine correct meta data
 * @param {string} payload - payload to be sent by ws client
 */
function apiGateWayHandler({key, payload}) {
    console.log(key)
    let {endPoint, apiRoute, failureAction, successAction} = metadata[key];
    Auth.currentSession().then((idToken)=>{
        console.log(idToken.idToken.jwtToken)

        const options = {
            headers: {
                Authorization: idToken.idToken.jwtToken
            }
        }
        console.log(API, options)
        API.get(endPoint,apiRoute,options)
            .then(resp => {
                // this.setState({
                //     data: resp
                // });
                console.log("APi SAga response is : ", resp);
            })
            .catch (err => console.log(err))
    })
}

/**
 * Saga Side-Effects Handler
 * @param {object} action - redux action
 */
function* apiGateWayActionHandler(action) {
    yield call(apiGateWayHandler, action);
}

/**
 * Saga: Capture all API_SOCKET_EMIT actions and call method to handle side-effects
 */
export function* takeEveryApiGateWaySaga() {
    yield takeEvery(REDUX_API_GATEWAY_ACTIONS.API_GATEWAY_FETCHING, apiGateWayActionHandler);
}