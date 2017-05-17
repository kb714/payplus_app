import * as ACTIONS from '../../constants/dashboardActions';
import { SHARED_STATE } from './shared';

const INITIAL_STATE = {
    ...SHARED_STATE,
    shops: {
        create: false,
        loading: true,
        error: false,
        message: null,
        items: []
    },
    shop: {
        create: false,
        created: false,
        loading: false,
        error: false,
        message: null
    }
};

export default function (state = INITIAL_STATE, action){
    switch(action.type) {
        case ACTIONS.FETCH_SHOPS:
            return { ...state, shops: { ...state.shops, loading: true, error: false } };

        case ACTIONS.RECEIVE_SHOPS:
            return { ...state, shops: { ...state.shops, loading: false, items: action.payload } };

        case ACTIONS.ERROR_RECEIVE_SHOPS:
            return { ...state, shops: { loading: false, error: true, message: action.payload } };

        case ACTIONS.OPEN_SHOP_FORM:
            return { ...state, shop: { ...state.shop, create: true } };

        case ACTIONS.CLOSE_SHOP_FORM:
            return { ...state, shop: { ...state.shop, create: false } };

        case ACTIONS.FETCH_CREATE_SHOP:
            return { ...state, shop: { ...state.shop, loading: true, error: false, message: null } };

        case ACTIONS.SUCCESS_CREATE_SHOP:
            return { ...state, shop: { ...state.shop, created: true, loading: false, error: false, message: null} };

        case ACTIONS.ERROR_CREATE_SHOP:
            return { ...state, shop: { ...state.shop, loading: false, error: true, message: action.payload } };

        case ACTIONS.RESET_CREATE_SHOP:
            return { ...state, shop: { ...state.shop, created: false, loading: false, error: false, message: null } };

        case ACTIONS.DESTROY_SHOP:
            const items = state.shops.items.filter((item) => item.slug !== action.payload);
            return { ...state, shops: { ...state.shops, loading: false, items: items } };

        default:
            return state;
    }
}