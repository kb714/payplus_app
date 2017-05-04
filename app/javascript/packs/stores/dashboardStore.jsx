import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import rootReducer from '../reducers/rootReducer';

const createStoreWithMiddleware = applyMiddleware(
    logger,
    thunk
)(createStore);

export default function dashboardStore(initialState) {
    return createStoreWithMiddleware(rootReducer, initialState);
}