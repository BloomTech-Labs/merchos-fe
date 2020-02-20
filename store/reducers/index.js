import { combineReducers } from 'redux';

// reducers
import { authInterface } from './userInterface/authInterface';
import { userData } from './userData/userData';

export const rootReducer = combineReducers({
  authInterface,
  userData
});
