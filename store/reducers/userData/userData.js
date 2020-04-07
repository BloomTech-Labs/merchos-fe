import {
  USER_LOGIN_SUCCESS,
  USER_REGISTER_SUCCESS,
  USER_LOGOUT
} from '../../actions/userAuth/userAuthActions';

const initialState = {
  userIsAuthed: false,
  userID: null
};

/**
 * userData will contain the user's authenticated state as well as the user ID
 * 
 */

export const userData = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        userIsAuthed: true,
        userID: action.payload.user
      };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        userIsAuthed: true,
        userID: action.payload.user
      };
    case USER_LOGOUT:
      return {
        ...state,
        userIsAuthed: false
      };
    default:
      return state;
  }
};
