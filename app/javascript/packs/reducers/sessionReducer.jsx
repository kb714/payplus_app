import { combineReducers } from 'redux';
import login from './sessions/loginReducer';

const sessionReducer = combineReducers({
    login
});

export default sessionReducer;