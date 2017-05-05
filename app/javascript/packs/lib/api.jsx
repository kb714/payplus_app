import axios from 'axios';

const API_URL = 'http://localhost:3000/api/v1';

export function getShops(){
    return axios.get(`${API_URL}/shops`);
}