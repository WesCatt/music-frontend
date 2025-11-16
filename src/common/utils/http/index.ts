import axios from 'axios';
import {clearAuth, getToken} from "@/common/utils/auth.ts";
import {toast} from "sonner";
import {formatDate} from "@/common/utils/tools.ts";


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
        description: `${formatDate(new Date())}`,
        position: "top-center",
        action: {
            label: "知晓",
            onClick: () => console.log("知晓"),
        },
    })
    return Promise.reject(err);
})

export default api;