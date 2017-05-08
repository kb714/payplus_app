import axios from 'axios';

const BASE_URL = 'http://localhost:3000';
const API_URL = `${BASE_URL}/api/v1`;
const TOKEN = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

export function postLogin(data) {
    const { email, password } = data;
    return axios.post(`${BASE_URL}/users/sign_in`, {
        user: {
            email: email,
            password: password
        },
        authenticity_token: TOKEN
    });
}

export function getShops() {
    return axios.get(`${API_URL}/shops`);
}

export function postShop(data) {
    const { name, description } = data;
    return axios.post(`${API_URL}/shops`, {
        name: name,
        description: description,
        authenticity_token: TOKEN
    });
}