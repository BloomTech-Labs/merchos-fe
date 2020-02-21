export const OPEN_AUTH_MODAL = 'OPEN_AUTH_MODAL';
export const CLOSE_AUTH_MODAL = 'CLOSE_AUTH_MODAL';

export const authModalController = status => dispatch => {
  switch (status) {
    case 'open':
      dispatch({ type: OPEN_AUTH_MODAL });
      break;
    case 'close':
      dispatch({ type: CLOSE_AUTH_MODAL });
      break;
    default:
      console.log("status of action required ('open'/'close')");
  }
};
