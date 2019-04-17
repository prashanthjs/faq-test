import {applyMiddleware, createStore, compose} from 'redux';
import rootReducer from '../reducers';
import rootSaga from '../sagas'
import middleware, {sagaMiddleware} from './middleware'

export default function configureStore(initialState = {}) {
    const composeEnhancer = (process.env.NODE_ENV === 'development') ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose : compose;
    const store = createStore(rootReducer, initialState, composeEnhancer(applyMiddleware(...middleware)));
    sagaMiddleware.run(rootSaga);
    return store;
}