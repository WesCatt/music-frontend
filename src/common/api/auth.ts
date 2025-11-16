import {createApi} from "@/common/utils/http/http.ts";

const api = createApi('auth');


export const login = (data) => api.post('sign-in', data);

export const logout = () => api.post('logout');


export const getProfile = () =>api.get('/profile');