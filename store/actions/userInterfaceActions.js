export const OPEN_AUTH_MODAL = 'OPEN_AUTH_MODAL';
export const CLOSE_AUTH_MODAL = 'CLOSE_AUTH_MODAL';

export const openAuthModal = () => dispatch => {
  dispatch({ type: OPEN_AUTH_MODAL });
};
export const closeAuthModal = () => dispatch => {
  dispatch({ type: CLOSE_AUTH_MODAL });
};
