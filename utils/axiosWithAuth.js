import axios from 'axios';

export const axiosWithAuth = () => {
  return axios.create({
    baseURL: process.env.BACKEND_URL,
    withCredentials: true
  });
};

export const axiosWithKey = () => axios.Create({
  baseURL: process.env.SCALABLE_API,
  auth: {
      username: "",
      password: process.env.REACT_APP_SCALABLE_API_KEY
  }
})


