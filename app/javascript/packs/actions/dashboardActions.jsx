import { getShops, postShop, deleteShop } from '../lib/api';
import * as ACTIONS from '../constants/dashboardActions';

export function fetchShops(){
    return dispatch => {
        dispatch({type: ACTIONS.FETCH_SHOPS});
        getShops()
            .then((res) => {
                dispatch({type: ACTIONS.RECEIVE_SHOPS, payload: res.data});
            })
            .catch((err) => {
                dispatch({type: ACTIONS.ERROR_RECEIVE_SHOPS, payload: err.response.data});
            });
    };
}

export function openShopCreateForm() {
    return dispatch => {
        dispatch({type: ACTIONS.OPEN_SHOP_FORM});
    }
}

export function closeShopCreateForm() {
    return dispatch => {
        dispatch({type: ACTIONS.CLOSE_SHOP_FORM});
    }
}

export function fetchCreateShop(data) {
    return dispatch => {
        dispatch({ type: ACTIONS.FETCH_CREATE_SHOP});
        postShop(data)
            .then((res) => {
                dispatch({ type: ACTIONS.SUCCESS_CREATE_SHOP, payload: res.data});
            })
            .catch((err) => {
                console.log(err);
                dispatch({ type: ACTIONS.ERROR_CREATE_SHOP, payload: err.response.data });
            });
    }
}

export function resetCreateShop() {
    return dispatch => {
        dispatch({ type: ACTIONS.RESET_CREATE_SHOP});
    }
}

export function destroyShop(id) {
    return dispatch => {
        dispatch({ type: ACTIONS.FETCH_SHOPS });
        deleteShop(id)
            .then((res) => {
                dispatch({ type: ACTIONS.DESTROY_SHOP, payload: id});
            })
            .catch((err) => {
                // ERROR ON DELETE, SHOW MESSAGE
                console.log(err);
            })
    }
}