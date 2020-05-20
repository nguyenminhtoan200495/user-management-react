import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://reqres.in'
});

axiosInstance.interceptors.request.use(
  function (config) {
    const token = JSON.parse(localStorage.getItem('tokens'));
    config.headers['Authorization'] = token;

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default axiosInstance;
