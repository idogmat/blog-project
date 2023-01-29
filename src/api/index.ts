import axios from 'axios';
import * as process from "process";

export const instance = axios.create({
    baseURL: process.env.API,
    withCredentials: true,
});

const authMe = () => {
    return instance.post("/auth/me", {});
};
// {
//     "login": "xaxegi5153",
//     "password": "Qwe123456",
//     "email": "xaxegi5153@csoft.com"
// }
const register = () => {
    return instance.post("auth/registration", {});
};
// {
//     "loginOrEmail": "string",
//     "password": "string"
// }
const login = () => {
    return instance.post("/auth/login", {});
};
const logout = () => {
    return instance.post("/auth/logout", {});
};