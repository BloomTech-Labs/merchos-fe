import { combineReducers } from "redux";
import workspaceReducer from "./workspaceReducer";

export const placeholder = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  workspace: workspaceReducer
});
