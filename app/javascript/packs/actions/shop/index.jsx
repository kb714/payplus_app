import { getShop } from '../../lib/api';
import * as ACTIONS from '../../constants/shop';

export function fetchShop(id) {
    return dispatch => {
        dispatch({type: ACTIONS.FETCH_SHOP});
        getShop(id)
            .then((res) => {
                dispatch({ type: ACTIONS.RECIEVE_SHOP, payload: res.data})
            })
            .catch((err) => {
                dispatch({type: ACTIONS.ERROR_RECIEVE_SHOP, payload: err.response.data})
            })
    }
}