import {createApi} from "@/common/utils/http/http.ts";

const api = createApi('auth');


interface LoginProps {
    email: string;
    password: string;
}

export const login = (data: LoginProps) => api.post('sign-in', data);

export const logout = () => api.post('logout');


export const getProfile = () => api.get('/profile');