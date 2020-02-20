import {
  USER_LOGIN_SUCCESS,
  USER_REGISTER_SUCCESS
} from '../../actions/userAuth/userAuthActions';

const initialState = {
  userIsAuthed: false,
  userID: null
};

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
    default:
      return state;
  }
};
