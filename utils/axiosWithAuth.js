import axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: process.env.BACKEND_URL,
    headers: {
      Authorization: token
    }
  });
};
