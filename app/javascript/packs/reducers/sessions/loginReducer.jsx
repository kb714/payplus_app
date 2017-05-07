import { FETCH_LOGIN, SUCCESS_LOGIN, ERROR_LOGIN, RESET_ERROR_LOGIN } from '../../constants/loginActions';

const INITIAL_STATE = {
    loading: false,
    success: false,
    error: false
};

export default function reducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case FETCH_LOGIN:
            return { ...state, loading: true };
        case SUCCESS_LOGIN:
            return { ...state, success: true, error: false };
        case ERROR_LOGIN:
            return { ...state, loading:false, error: true };
        case RESET_ERROR_LOGIN:
            return { ...state, error: false };
        default:
            return state;
    }
}