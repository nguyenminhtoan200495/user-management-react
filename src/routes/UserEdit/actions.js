import axios from '../../utils/axios';
import { FETCH_USER } from './types';

export const fetchUser = (id) => async (dispatch) => {
  const response = await axios.get(`/api/users/${id}`);

  dispatch({ type: FETCH_USER, payload: response.data.data });
};

export const editUser = async (id, user) => {
  await axios.put(`/api/users/${id}`, user);
};
