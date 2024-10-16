import axios from "axios";

const api_uri = "http://localhost:8181";
const data = "";
export const login= () =>axios.post(`${api_uri}/api/v1/auth/login`,data);
export const register= () =>axios.post(`${api_uri}/api/v1/auth/register`,data);
export const logout= () =>axios.post(`${api_uri}/api/v1/auth/logout`,data);
export const forgotPassword= (data) =>axios.patch(`${api_uri}/api/v1/auth/forgot_passwords`,data);


