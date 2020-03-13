export const SELECT_LAYOUT = "SELECT_LAYOUT";
export const UPDATE_LAYOUT = "UPDATE_LAYOUT";
export const DROP_ITEM = "DROP_ITEM";

export const selectLayoutAction = layoutType => dispatch => {
  dispatch({ type: SELECT_LAYOUT, payload: { layoutType } });
};

export const updateLayoutAction = layoutUpdate => dispatch => {
  if (
    layoutUpdate.length &&
    !RegExp(".*__dropping-elem__$").test(
      layoutUpdate[layoutUpdate.length - 1].i
    )
  ) {
    dispatch({ type: UPDATE_LAYOUT, payload: { layoutUpdate } });
  }
};

export const onDrop = (item, dragId) => dispatch => {
  dispatch({ type: DROP_ITEM, payload: { item, dragId } });
};
