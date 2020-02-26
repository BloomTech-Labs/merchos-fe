import { combineReducers } from "redux";
import { sidebar } from "./sidebarReducers";

export const placeholder = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  sidebar
});
