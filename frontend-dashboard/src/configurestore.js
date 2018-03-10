import { createStore,applyMiddleware,compose } from 'redux';
import rootReducer from  './reducers';
import 'regenerator-runtime/runtime'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga/rootSaga'
import { createLogger } from 'redux-logger'

import {localState,saveState} from  './localstorage'

//const persistedData= localState();
const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware,createLogger()]
const composerEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ ||compose
export default(initialState) => {
    const store = createStore(rootReducer, initialState,composerEnhancers(applyMiddleware(...middleware)))
    sagaMiddleware.run(rootSaga);
    // store.subscribe(()=>{
    //     saveState({
    //
    //         token :store.getState().auth[0].authHeader
    //     })
    // });
    return store;
}