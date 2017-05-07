import { FETCH_SHOPS, RECEIVE_SHOPS, ERROR_RECEIVE_SHOPS,
    OPEN_SHOP_FORM, CLOSE_SHOP_FORM } from '../../constants/actions';

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
                shops: {
                    ...state.shops,
                    create: true
                }
            };
        case CLOSE_SHOP_FORM:
            return { ...state,
                shops: {
                    ...state.shops,
                    create: false
                }
            };
        default:
            return state;
    }
}