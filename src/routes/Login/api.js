import axios from 'axios';

export const logIn = (user) => {
  return axios.post('https://reqres.in/api/login', { ...user });
};
