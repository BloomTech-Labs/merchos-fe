import { combineReducers } from 'redux';

// reducers
import { userInterfaceReducer } from './userInterfaceReducer';
import { userDataReducer } from './userDataReducer';

export const placeholder = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  userInterfaceReducer,
  userDataReducer
});
