import { combineReducers } from 'redux';

export const placeholder = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  placeholder
});
