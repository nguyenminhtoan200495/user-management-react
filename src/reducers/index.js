import { combineReducers } from 'redux';
import userListReducer from '../routes/Home/reducer';
import userReducer from '../routes/UserEdit/reducer';

export default combineReducers({
  userList: userListReducer,
  user: userReducer
});
