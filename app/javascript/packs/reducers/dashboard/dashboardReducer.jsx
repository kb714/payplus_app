import { FETCH_SHOPS, RECEIVE_SHOPS, ERROR_RECEIVE_SHOPS } from '../../constants/actions';
import _ from 'lodash';

const current_user = document.querySelector('body');

const INITIAL_STATE = {
    email: current_user.getAttribute('data-email'),
    logout_url: current_user.getAttribute('data-logout'),
    shops: {
        loading: true,
        error: false,
        message: null,
        items: []
    }
};

export default function (state = INITIAL_STATE, action){
    switch(action.type) {
        case FETCH_SHOPS:
            return Object.assign({}, state, {
                shops: {
                    loading: true,
                    error: false
                }
            });
        case RECEIVE_SHOPS:
            return { ...state, shops: {items: action.payload} };
        case ERROR_RECEIVE_SHOPS:
            return Object.assign({}, state, {
                shops: {
                    loading: false,
                    error: true,
                    message: action.payload
                }
            });
        default:
            return state;
    }
}