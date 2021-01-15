import axios from 'axios';

export const apiCall = async (config) => {
    const params = { ...config };
    return axios.post(config.url, params)
        .then(res => {
            return res.data;
        })
        .catch(error => {
            return error;
        });

};