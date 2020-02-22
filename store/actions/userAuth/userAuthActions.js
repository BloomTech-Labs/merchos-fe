import { axiosWithAuth } from '../../../utils/axiosWithAuth';

export const USER_LOGIN_TRY = 'USER_LOGIN';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';

export const USER_REGISTER_TRY = 'USER_REGISTER';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const USER_REGISTER_FAIL = 'USER_REGISTER_FAIL';

/**
 * This action creator will receive the activeTab from the modal,
 * as well as the data that is being submitted, then dispatch that info
 * to our userData reducer
 */
export const authorizeUser = (activeTab, data) => dispatch => {
  // check for activeTab state in the authmodal
  switch (activeTab) {
    // if activeTab is === 'Sign In'
    case 'Sign In':
      // first, dispatch the login attempt
      dispatch({ type: USER_LOGIN_TRY });

      // remove rememberMe from obj as it's not implemented yet
      const newData = {
        username: data.username,
        password: data.password
      };
      // call axiosWithAuth and send a POST request to the login route
      return axiosWithAuth()
        .post('/user/login', newData)
        .then(({ data }) => {
          // once we receive the data, we'll set the token to localStorage
          localStorage.setItem('token', data.token);
          // after which we'll dispatch a success message, along with the data as the payload
          dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
        })
        .catch(() => {
          // if any errors, dispatch a login fail state
          dispatch({ type: USER_LOGIN_FAIL });
        });
    // if the activeTab is === 'Sign Up'
    case 'Sign Up':
      // first, dispatch the registration attempt
      dispatch({ type: USER_REGISTER_TRY });
      // after which, call axiosWithAuth and send a post request to registration route
      return axiosWithAuth()
        .post('/user/register', data)
        .then(({ data }) => {
          // once we receive the data, set the token to local storage
          localStorage.setItem('token', data.token);
          // dispatch the success to our reducer, along with the payload data
          dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
        })
        .catch(() => {
          // if any fail, dispatch the fail
          dispatch({ type: USER_REGISTER_FAIL });
        });
    default:
      // if we call this action and don't pass in the activeTab status and the data, notify dev
      console.log('activeTab is required');
  }
};
