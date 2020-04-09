import { combineReducers } from 'redux';

// reducers
import { authInterface } from './userInterface/authInterface';
import { userData } from './userData/userData';
import { shopServerConnection } from './shopServerConnection/shopServerConnection';
import workspaceReducer from './workspaceReducer';

export const rootReducer = combineReducers({
  workspace: workspaceReducer,
  shopServerConnection,
  authInterface,
  userData
});
