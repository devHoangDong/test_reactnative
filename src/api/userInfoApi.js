import axiosClientNotLogin from './base/axiosClientNotLogin';
const PREFIX_URL = '/api/users';

const userInfoApi = {
    getUser: (params) => {
        const url = `${PREFIX_URL}/random_user`;
        return axiosClientNotLogin.get(url, { params });
    }
};
export default userInfoApi;
