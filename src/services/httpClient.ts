import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com/';
axios.defaults.headers.common = {
    Accept: 'application/json, application/xml, text/play, text/html, *.*',
    'Content-Type': 'application/json',
};

export const httpClient = axios.create();

export default axios;
