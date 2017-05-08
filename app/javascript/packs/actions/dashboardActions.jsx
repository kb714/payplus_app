import { getShops, postShop } from '../lib/api';
import {
    FETCH_SHOPS, RECEIVE_SHOPS, ERROR_RECEIVE_SHOPS, OPEN_SHOP_FORM,
    CLOSE_SHOP_FORM, FETCH_CREATE_SHOP, SUCCESS_CREATE_SHOP,
    ERROR_CREATE_SHOP, RESET_CREATE_SHOP } from '../constants/dashboardActions';

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

export function openShopCreateForm() {
    return dispatch => {
        dispatch({type: OPEN_SHOP_FORM});
    }
}

export function closeShopCreateForm() {
    return dispatch => {
        dispatch({type: CLOSE_SHOP_FORM});
    }
}

export function fetchCreateShop(data) {
    return dispatch => {
        dispatch({ type: FETCH_CREATE_SHOP});
        postShop(data)
            .then((res) => {
                dispatch({ type: SUCCESS_CREATE_SHOP, payload: res.data});
            })
            .catch((err) => {
                dispatch({ type: ERROR_CREATE_SHOP, payload: err.response.data });
            });
    }
}

export function resetCreateShop(){
    return dispatch => {
        dispatch({ type: RESET_CREATE_SHOP});
    }
}