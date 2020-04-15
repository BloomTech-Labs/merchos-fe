export const ADD_TOAST_VALUES = 'ADD_TOAST_VALUES';
export const REMOVE_TOAST_VALUES = 'REMOVE_TOAST_VALUES';

export const toastController = (type) => (dispatch) => {
  if (!type) {
    return console.warn('No type was provied');
  }

  const id = Date.now();
  var message;

  if (type === 'auth') {
    message = 'You must be logged in to do that';
  }

  if (type === 'storeSaved') {
    message = 'Your store has been saved'
  }

  dispatch({ type: ADD_TOAST_VALUES, payload: { id, message } });
  setTimeout(() => {
    dispatch({ type: REMOVE_TOAST_VALUES, payload: id });
  }, 3000);
};
