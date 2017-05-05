import { getShops } from '../lib/api';
import { FETCH_SHOPS, RECEIVE_SHOPS, ERROR_RECEIVE_SHOPS } from '../constants/actions';

export function fetchShops(){
    return dispatch => {
        dispatch({type: FETCH_SHOPS});
        getShops()
            .then((res) => {
                dispatch({type: RECEIVE_SHOPS, payload: res.data});
            })
            .catch((err) => {
                dispatch({type: ERROR_RECEIVE_SHOPS, payload: err.response.data});
            });
    };
}