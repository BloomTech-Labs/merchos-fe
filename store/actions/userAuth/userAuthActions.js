import { axiosWithAuth } from '../../../utils/axiosWithAuth';

import { CLOSE_AUTH_MODAL } from '../userInterface/authModalController';

export const USER_LOGIN_TRY = 'USER_LOGIN';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';

export const USER_REGISTER_TRY = 'USER_REGISTER';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const USER_REGISTER_FAIL = 'USER_REGISTER_FAIL';
export const USER_LOGOUT = 'USER_LOGOUT';

/**
 * This action creator will receive the activeTab from the modal,
 * as well as the data that is being submitted, then dispatch that info
 * to our userData reducer
 */
export const authorizeUser = (activeTab, data) => (dispatch) => {
  // check for activeTab state in the authmodal
  switch (activeTab) {
    // if activeTab is === 'Sign In'
    case 'Sign In':
      // first, dispatch the login attempt
      dispatch({ type: USER_LOGIN_TRY });

      // call axiosWithAuth and send a POST request to the login route
      return axiosWithAuth()
        .post('/auth/login', data)
        .then(({ data }) => {
          // after which we'll dispatch a success message, along with the data as the payload
          dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
          dispatch({ type: CLOSE_AUTH_MODAL });
        })
        .catch((err) => {
          // if any errors, dispatch a login fail state
          dispatch({
            type: USER_LOGIN_FAIL,
            payload: err.response.data.message,
          });
        });
    // if the activeTab is === 'Sign Up'
    case 'Sign Up':
      // first, dispatch the registration attempt
      dispatch({ type: USER_REGISTER_TRY });
      // after which, call axiosWithAuth and send a post request to registration route
      return axiosWithAuth()
        .post('/auth/register', data)
        .then(({ data }) => {
          // dispatch the success to our reducer, along with the payload data
          dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
          dispatch({ type: CLOSE_AUTH_MODAL });
        })
        .catch((err) => {
          // if any fail, dispatch the fail
          dispatch({
            type: USER_REGISTER_FAIL,
            payload: err.response.data.message,
          });
        });
    case 'Log Out':
      return dispatch({ type: USER_LOGOUT });

    default:
      // if we call this action and don't pass in the activeTab status and the data, notify dev
      console.log('activeTab is required');
  }
};
