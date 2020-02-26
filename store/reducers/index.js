import { combineReducers } from "redux";

// reducers
import { sidebar } from "./sidebarReducers";
import { authInterface } from "./userInterface/authInterface";
import { userData } from "./userData/userData";

export const rootReducer = combineReducers({
  workspace: workspaceReducer,
  sidebar,
  authInterface,
  userData
});
