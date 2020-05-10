import { combineReducers } from 'redux';
import userListReducer from './userListReducer';
import userCreateReducer from './userCreateReducer';
import userEditReducer from './userEditReducer';
import userReducer from './userReducer';

export default combineReducers({
  userList: userListReducer,
  userCreate: userCreateReducer,
  userEdit: userEditReducer,
  user: userReducer
});
