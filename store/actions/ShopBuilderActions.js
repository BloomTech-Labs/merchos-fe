export const SELECT_LAYOUT = "SELECT_LAYOUT";
export const UPDATE_LAYOUT = "UPDATE_LAYOUT";

export const selectLayoutAction = layoutType => dispatch => {
  dispatch({ type: SELECT_LAYOUT, payload: { layoutType } });
};

export const updateLayoutAction = layout => dispatch => {
  console.log("LAYOUT: ", layout);
  if (layout[layout.length - 1].i !== "__dropping-elem__") {
    dispatch({ type: UPDATE_LAYOUT, payload: { layout } });
  }
};
