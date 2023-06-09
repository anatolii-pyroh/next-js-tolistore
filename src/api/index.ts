import axios from "axios";

const baseURL = process.env.API_URL;

export const api = axios.create({
  baseURL,
});

api.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);
