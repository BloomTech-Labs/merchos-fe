import { combineReducers } from "redux";
import workspaceReducer from "./workspaceReducer";

// reducers
import { authInterface } from './userInterface/authInterface';
import { userData } from './userData/userData';

export const rootReducer = combineReducers({
  workspace: workspaceReducer,
  authInterface,
  userData
});
