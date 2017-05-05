import { combineReducers } from 'redux';
import dashboard from './dashboard/dashboardReducer';

const sessionReducer = combineReducers({
    dashboard
});

export default sessionReducer;