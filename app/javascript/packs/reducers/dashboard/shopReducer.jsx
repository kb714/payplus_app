import * as ACTIONS from '../../constants/shop';

const INITIAL_STATE = {
    loading: true,
    data: {image: {url: null, thumb: {url: null}}}
};

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case ACTIONS.FETCH_SHOP:
            return { ...state, loading: true};
        case ACTIONS.RECIEVE_SHOP:
            return { ...state, loading: false, data: action.payload};
        case ACTIONS.ERROR_RECIEVE_SHOP:
            return state;
        default:
            return state;
    }
}