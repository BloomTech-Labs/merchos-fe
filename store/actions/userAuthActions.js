import { axiosWithAuth } from '../../utils/axiosWithAuth';

const USER_LOGIN_TRY = 'USER_LOGIN';
const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';

const USER_REGISTER_TRY = 'USER_REGISTER';
const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS';
const USER_REGISTER_FAIL = 'USER_REGISTER_FAIL';

export const authorizeUser = (activeTab, data) => dispatch => {
  switch (activeTab) {
    case 'Sign In':
      // remove rememberMe from obj as it's not implemented yet
      const newData = {
        username: data.username,
        password: data.password
      };
      return axiosWithAuth()
        .post('/user/login', newData)
        .then(({ data }) => {
          dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
        })
        .catch(() => {
          dispatch({ type: USER_LOGIN_FAIL, payload: true });
        });
    case 'Sign Up':
      console.log(data);
      break;
    default:
      console.log('activeTab is required');
  }
};
