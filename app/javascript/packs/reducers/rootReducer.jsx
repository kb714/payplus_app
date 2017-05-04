import { combineReducers } from 'redux';
import init from './dashboard/initReducer';

const sessionReducer = combineReducers({
    dashboard: init
});

export default sessionReducer;