import {
  OPEN_AUTH_MODAL,
  CLOSE_AUTH_MODAL
} from '../actions/userInterfaceActions';

const initialState = {
  authModalActive: false
};

export const userInterfaceReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_AUTH_MODAL:
      return {
        ...state,
        authModalActive: true
      };
    case CLOSE_AUTH_MODAL:
      return {
        ...state,
        authModalActive: false
      };
    default:
      return state;
  }
};
