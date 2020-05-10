import users from '../apis/users';
import { FETCH_USERS, FETCH_USER, CREATE_USER, EDIT_USER } from './types';

export const fetchUsers = () => async (dispatch) => {
  const response = await users.get('/api/users');

  dispatch({ type: FETCH_USERS, payload: response.data.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await users.get(`/api/users/${id}`);

  dispatch({ type: FETCH_USER, payload: response.data.data });
};

export const createUser = (user) => async (dispatch) => {
  const response = await users.post('/api/users', { ...user });

  dispatch({ type: CREATE_USER, payload: response.data.data });
};

export const editUser = (id, user) => async (dispatch) => {
  const response = await users.put(`/api/users/${id}`, user);

  dispatch({ type: EDIT_USER, payload: response.data });
};

export const deleteUser = async (id) => {
  await users.delete(`/api/users/${id}`);

  // dispatch({ type: DELETE_USER, payload: id });
};
