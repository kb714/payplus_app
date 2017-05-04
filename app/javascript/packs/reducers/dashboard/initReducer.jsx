import { INIT_DASHBOARD } from '../../constants/actions';

const current_user = document.querySelector('body');

const INITIAL_STATE = {
    email: current_user.getAttribute('data-email'),
    logout_url: current_user.getAttribute('data-logout')
};

export default function reducer(state = INITIAL_STATE, action){
    switch(action.type) {
        case INIT_DASHBOARD:
            return state;
            break;
    }
    return state;
}