import axios from 'axios';
import {getToken} from "@/common/utils/auth";

const api = axios.create({
    baseURL: import.meta.env.DEV ? import.meta.env.VITE_DEV_API_URL : import.meta.env.VITE_PRO_API_URL
});


api.interceptors.request.use((config) => {
    const token = getToken();
    if (token) config.headers.Authorization = `Bearer ${token}`;

    return config;
});

api.interceptors.response.use(res => {
    return res.data;
}, (err) => {
    return Promise.reject(err);
})

export default api;