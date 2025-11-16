import axios from 'axios';
import {clearAuth, getToken} from "@/common/utils/auth.ts";
import {toast} from "sonner";


export const baseURL = import.meta.env.DEV ? import.meta.env.VITE_DEV_API_URL : import.meta.env.VITE_PRO_API_URL
const api = axios.create({
    baseURL,
});


api.interceptors.request.use((config) => {
    const token = getToken();
    if (token) config.headers.Authorization = `Bearer ${token}`;

    return config;
});

api.interceptors.response.use(res => {
    return res.data;
}, (err) => {
    if (err.status === 401) {
        clearAuth();
    }
    toast(err.response.data.message || err.message, {
        description: "Sunday, December 03, 2023 at 9:00 AM",
        position:"top-center",
        action: {
            label: "知晓",
            onClick: () => console.log("知晓"),
        },
    })
    return Promise.reject(err);
})

export default api;