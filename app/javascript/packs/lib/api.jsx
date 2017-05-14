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

export function postShop(data, image) {
    const { name, description } = data;
    const shop = new FormData();
    shop.append('name', name);
    shop.append('description', description);
    shop.append('image', image);
    return axios.post(`${API_URL}/shops`, {
        shop,
        authenticity_token: TOKEN
    });
}

export function deleteShop(id) {
    return axios({
        method: 'DELETE',
        url: `${API_URL}/shops/${id}`,
        data: {
            authenticity_token: TOKEN
        }
    });
}