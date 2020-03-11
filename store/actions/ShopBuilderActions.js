export const SELECT_LAYOUT = "SELECT_LAYOUT";
export const UPDATE_LAYOUT = "UPDATE_LAYOUT";
export const DROP_ITEM = "DROP_ITEM";

export const selectLayoutAction = layoutType => dispatch => {
  dispatch({ type: SELECT_LAYOUT, payload: { layoutType } });
};

export const updateLayoutAction = layout => dispatch => {
  if (layout[layout.length - 1].i !== "__dropping-elem__") {
    const layoutUpdated = layout.filter(item => item.i !== "Filler");
    dispatch({ type: UPDATE_LAYOUT, payload: { layoutUpdated } });
  }
};

export const onDrop = item => dispatch => {
  dispatch({ type: DROP_ITEM, payload: { item } });
};
