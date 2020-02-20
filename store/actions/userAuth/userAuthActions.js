import { axiosWithAuth } from '../../../utils/axiosWithAuth';

export const USER_LOGIN_TRY = 'USER_LOGIN';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';

export const USER_REGISTER_TRY = 'USER_REGISTER';
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
export const USER_REGISTER_FAIL = 'USER_REGISTER_FAIL';

export const authorizeUser = (activeTab, data) => dispatch => {
  switch (activeTab) {
    case 'Sign In':
      dispatch({ type: USER_LOGIN_TRY });
      // remove rememberMe from obj as it's not implemented yet
      const newData = {
        username: data.username,
        password: data.password
      };
      return axiosWithAuth()
        .post('/user/login', newData)
        .then(({ data }) => {
          localStorage.setItem('token', data.token);
          dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
        })
        .catch(() => {
          dispatch({ type: USER_LOGIN_FAIL });
        });
    case 'Sign Up':
      dispatch({ type: USER_REGISTER_TRY });
      // remove rememberMe from obj as it's not implemented yet
      return axiosWithAuth()
        .post('/user/register', data)
        .then(({ data }) => {
          localStorage.setItem('token', data.token);
          dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
        })
        .catch(() => {
          dispatch({ type: USER_REGISTER_FAIL });
        });
    default:
      console.log('activeTab is required');
  }
};
