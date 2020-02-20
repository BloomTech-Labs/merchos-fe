import {
  OPEN_AUTH_MODAL,
  CLOSE_AUTH_MODAL
} from '../../actions/userInterface/authModalController';
import {
  USER_LOGIN_TRY,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER_TRY,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL
} from '../../actions/userAuth/userAuthActions';

const initialState = {
  authModalActive: false,
  authLoading: false,
  authErr: false
};

/**
 * Auth interface describes what the UI looks like on the authentication modal
 * ranging from active state, loading errors, and authErrors
 *
 */

export const authInterface = (state = initialState, action) => {
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
    case USER_LOGIN_TRY:
      return {
        ...state,
        authLoading: true,
        authErr: false
      };
    case USER_LOGIN_SUCCESS:
      return {
        ...state,
        authLoading: false
      };
    case USER_LOGIN_FAIL:
      return {
        ...state,
        authLoading: false,
        authErr: true
      };
    case USER_REGISTER_TRY:
      return {
        ...state,
        authLoading: true,
        authErr: false
      };
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        authLoading: false
      };
    case USER_REGISTER_FAIL:
      return {
        ...state,
        authLoading: false,
        authErr: true
      };
    default:
      return state;
  }
};
