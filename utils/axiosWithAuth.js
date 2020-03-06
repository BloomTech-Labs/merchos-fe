import axios from 'axios';

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: process.env.BACKEND_URL,
    withCredentials: true
  });
};
