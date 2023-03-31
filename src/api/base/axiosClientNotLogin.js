import axios from 'axios';
import queryString from 'query-string';

const axiosClientNotLogin = axios.create({
    baseURL: 'https://random-data-api.com',
    timeout: 40000,
    headers: {
        'content-type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    },
    paramsSerializer: (params) => queryString.stringify(params),
});

axiosClientNotLogin.interceptors.request.use(async (config) => {
    return config;
});

axiosClientNotLogin.interceptors.response.use(
    (response) => {
        if (response && response.data) {
            return response.data;
        }
        return response;
    },
    (error) => {
        console.log(error.message);
    }
);
export default axiosClientNotLogin;
