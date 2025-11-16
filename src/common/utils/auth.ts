const AUTH_KEY = "USER";
const TOKEN_KEY = "TOKEN";

interface User {
    username: string;
    password: string;
    email: string;
}

export const saveUser = (user: User) => {
    return localStorage.setItem(AUTH_KEY, JSON.stringify(user));
}

export const saveToken = (token: string) => {

    return localStorage.setItem(TOKEN_KEY, JSON.stringify(token))
}

export const saveAuth = (user: User, token: string) => {
    saveUser(user);
    saveToken(token);
}


export const getToken = () => {
    return JSON.parse(localStorage.getItem(TOKEN_KEY) || "null");
}

export const getProfile = () => {
    return JSON.parse(localStorage.getItem(AUTH_KEY) || "null");
}


export const clearAuth = () => {
    localStorage.removeItem(AUTH_KEY);
    localStorage.removeItem(TOKEN_KEY);
}
