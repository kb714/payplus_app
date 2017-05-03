import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import sessionReducer from '../reducers/session_reducer';

const createStoreWithMiddleware = applyMiddleware(
    thunk
)(createStore);

export default function loginStore(initialState) {
    return createStoreWithMiddleware(sessionReducer, initialState);
}