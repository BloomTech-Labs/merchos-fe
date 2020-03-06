export const UPDATE_STATE = "UPDATE_STATE";

export const updateState = state => {
  console.log(state, "action state");
  return { type: UPDATE_STATE, payload: state };
};
