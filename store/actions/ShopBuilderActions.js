export const SELECT_LAYOUT = "SELECT_LAYOUT";
export const UPDATE_LAYOUT = "UPDATE_LAYOUT";
export const DROP_ITEM = "DROP_ITEM";
export const BREAKPOINT_CHANGE = "BREAKPOINT_CHANGE";
export const WIDTH_CHANGE = "WIDTH_CHANGE";

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

export const onBreakpointChange = (newBreakpoint, newCols) => dispatch => {
  console.log("BREAKPOINT: ", newBreakpoint);
  console.log("COLUMNS: ", newCols);
};

export const onWidthChange = layoutProperties => dispatch => {
  // const { cols, containerPadding } = layoutProperties;

  console.log("LAYOUT_PROPS: ", layoutProperties);
  // console.log("PADDING: ", containerPadding);
};
