import axios from 'axios';

const BASE_URL = 'http://localhost:3000';
const API_URL = `${BASE_URL}/api/v1`;

export function postLogin(data) {
    const { email, password } = data;
    return axios.post(`${BASE_URL}/users/sign_in`, {
        user: {
            email: email,
            password: password
        },
        authenticity_token: document.querySelector('meta[name="csrf-token"]').getAttribute('content')
    });
}

export function getShops() {
    return axios.get(`${API_URL}/shops`);
}