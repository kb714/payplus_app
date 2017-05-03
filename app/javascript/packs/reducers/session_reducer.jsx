import { combineReducers } from 'redux';
import login from './sessions/login';

const sessionReducer = combineReducers({
    login
});

export default sessionReducer;