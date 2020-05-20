import axios from '../../utils/axios';
import { FETCH_USERS } from './types';

export const fetchUsers = () => async (dispatch) => {
  const response = await axios.get('/api/users');

  dispatch({ type: FETCH_USERS, payload: response.data.data });
};

export const deleteUser = async (id) => {
  await axios.delete(`/api/users/${id}`);
};
