import { FETCH_SHOPS, RECEIVE_SHOPS, ERROR_RECEIVE_SHOPS,
    OPEN_SHOP_FORM, CLOSE_SHOP_FORM, FETCH_CREATE_SHOP,
    SUCCESS_CREATE_SHOP, ERROR_CREATE_SHOP, RESET_CREATE_SHOP } from '../../constants/dashboardActions';

const current_user = document.querySelector('body');

const INITIAL_STATE = {
    email: current_user.getAttribute('data-email'),
    logout_url: current_user.getAttribute('data-logout'),
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
        case FETCH_SHOPS:
            return { ...state,
                shops: {
                    ...state.shops,
                    loading: true,
                    error: false
                }
            };
        case RECEIVE_SHOPS:
            return { ...state,
                shops: {
                    ...state.shops,
                    loading: false,
                    items: action.payload
                }
            };
        case ERROR_RECEIVE_SHOPS:
            return { ...state,
                shops: {
                    loading: false,
                    error: true,
                    message: action.payload
                }
            };
        case OPEN_SHOP_FORM:
            return { ...state,
                shop: {
                    ...state.shop,
                    create: true
                }
            };
        case CLOSE_SHOP_FORM:
            return { ...state,
                shop: {
                    ...state.shop,
                    create: false
                }
            };
        case FETCH_CREATE_SHOP:
            return { ...state, shop: { ...state.shop, loading: true, error: false, message: null } };
        case SUCCESS_CREATE_SHOP:
            return { ...state, shop: { ...state.shop, created: true, loading: false, error: false, message: null} };
        case ERROR_CREATE_SHOP:
            return { ...state, shop: { ...state.shop, loading: false, error: true, message: action.payload } };
        case RESET_CREATE_SHOP:
            return { ...state, shop: { ...state.shop, created: false, loading: false, error: false, message: null } };
        default:
            return state;
    }
}