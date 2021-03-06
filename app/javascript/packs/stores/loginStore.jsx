import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import sessionReducer from '../reducers/sessionReducer';

const createStoreWithMiddleware = applyMiddleware(
    logger,
    thunk
)(createStore);

export default function loginStore(initialState) {
    return createStoreWithMiddleware(sessionReducer, initialState);
}