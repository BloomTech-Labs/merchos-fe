export const EDIT_STORE = "EDIT_STORE";
export const CREATE_STORE = "CREATE_STORE";

export const editStore = storeData => dispatch => {
  dispatch({ type: EDIT_STORE, payload: storeData });
};

export const createStore = () => dispatch => {
  dispatch({ type: CREATE_STORE });
};
