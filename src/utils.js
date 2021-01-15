import axios from 'axios';

export const apiCall = async (config) => {
    const params = { ...config };
    console.log(params)
    return axios.post(config.url, params)
        .then(res => {
            return res.data;
        })
        .catch(error => {
            return error;
        });

};