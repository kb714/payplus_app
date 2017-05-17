import { combineReducers } from 'redux';
import dashboard from './dashboard';
import shop from './dashboard/shopReducer';

const sessionReducer = combineReducers({
    dashboard,
    shop
});

export default sessionReducer;