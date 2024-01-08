import { combineReducers } from 'redux';
// import { persistReducer } from 'redux-persist';
import authReducer from './authReducer';
import GET_GROUP_REDUCER from './getGroupReducer';
import CREATE_GROUP_REDUCER from './createGroupReducer';
import FriendListReducer from './friendListREducer';
import ActivityListReducer from './activityListReducer';
import AddExpenseReducer from './addExpenseReducer';
import AddFriendReducer from './addFriendReducer';
import RemoveFriendReducer from './removeFriendReducer';
import DeleteExpenseReducer from './deleteExpenseReducer';
import GetGroupInformationReducer from './getGroupInformationReducer';
import ExpenseDetailsReducer from './expenseDetailsReducer';
// --------------------------
import AddUserInGroupReducer from './AddUserInGroupReducer';
import RemoveUserInGroupReducer from './RemoveUserInGroupReducer';
import RestoreExpenseReducer from './restoreExpenseReducer';
import DeleteGroupReducer from './deleteGroupReducer';
import FriendDetailReducer from './friendDetailReducer';
import GetUserDetailReducer from './getUserDetailReducer';
import { TYPES } from '../actions/authAction';

const appReducer = combineReducers({
  authReducer,
  GET_GROUP_REDUCER,
  CREATE_GROUP_REDUCER,
  FriendListReducer,
  ActivityListReducer,
  AddExpenseReducer,
  AddFriendReducer,
  RemoveFriendReducer,
  DeleteExpenseReducer,
  GetGroupInformationReducer,
  ExpenseDetailsReducer,
  AddUserInGroupReducer,
  RemoveUserInGroupReducer,
  RestoreExpenseReducer,
  DeleteGroupReducer,
  FriendDetailReducer,
  GetUserDetailReducer
 
});

const rootReducer = (state, action) => {
  if (action.type === TYPES.LOGOUT_USER_REQUEST) {
    return appReducer(undefined, action)
  }
  return appReducer(state, action)
}

export default rootReducer;
