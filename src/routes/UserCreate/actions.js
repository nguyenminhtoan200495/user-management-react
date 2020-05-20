import axios from '../../utils/axios';
import { CREATE_USER } from './types';

export const createUser = (user) => async (dispatch) => {
  const response = await axios.post('/api/users', { ...user });

  dispatch({ type: CREATE_USER, payload: response.data.data });
};
