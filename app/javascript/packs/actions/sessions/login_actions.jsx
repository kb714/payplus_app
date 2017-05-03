import axios from 'axios';

export function login(data){
    return dispatch => {
        return axios.post('/users/sign_in', {
            user: {
                email: data.email,
                password: data.password
            },
            authenticity_token: document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        });
    }
}