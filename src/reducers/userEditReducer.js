import { EDIT_USER } from '../actions/types';

const INITIAL_STATE = {
  user: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EDIT_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
