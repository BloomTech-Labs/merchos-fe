export const SELECT_LAYOUT = "SELECT_LAYOUT";
export const UPDATE_LAYOUT = "UPDATE_LAYOUT";
export const DROP_ITEM = "DROP_ITEM";

export const selectLayoutAction = layoutType => dispatch => {
  dispatch({ type: SELECT_LAYOUT, payload: { layoutType } });
};

export const updateLayoutAction = layoutUpdate => dispatch => {
  console.log("LAYOUT: ", layoutUpdate);
  if (
    layoutUpdate.length &&
    layoutUpdate[layoutUpdate.length - 1].i !== "__dropping-elem__"
  ) {
    dispatch({ type: UPDATE_LAYOUT, payload: { layoutUpdate } });
  }
};

export const onDrop = item => dispatch => {
  dispatch({ type: DROP_ITEM, payload: { item } });
};
