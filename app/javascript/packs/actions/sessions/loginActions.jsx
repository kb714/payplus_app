import { postLogin } from '../../lib/api';
import { FETCH_LOGIN, SUCCESS_LOGIN, ERROR_LOGIN, RESET_ERROR_LOGIN } from '../../constants/loginActions';

export function fetchLogin(data){
    return dispatch => {
        dispatch({type: FETCH_LOGIN});
        postLogin(data).then(
            (res) => dispatch({ type: SUCCESS_LOGIN, payload: res }),
            (err) => {
                dispatch({ type: ERROR_LOGIN, payload: err });
                dispatch({ type: RESET_ERROR_LOGIN });
            }
        );
    }
}