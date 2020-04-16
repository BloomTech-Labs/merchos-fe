import {
  ADD_TOAST_VALUES,
  REMOVE_TOAST_VALUES,
} from '../../actions/userInterface/toastActions';

const initialState = {
  toasts: [],
};

export const toastController = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TOAST_VALUES:
      return {
        ...state,
        toasts: [...state.toasts, action.payload],
      };
    case REMOVE_TOAST_VALUES:
      return {
        ...state,
        toasts: state.toasts.filter((toast) => toast.id !== action.payload),
      };
    default:
      return state;
  }
};
