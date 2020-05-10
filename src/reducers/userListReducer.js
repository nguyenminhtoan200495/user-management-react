import { FETCH_USERS } from '../actions/types';

const INITIAL_STATE = {
  userList: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return { ...state, userList: action.payload };
    default:
      return state;
  }
};
