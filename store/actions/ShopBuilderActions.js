export const SELECT_LAYOUT = "SELECT_LAYOUT";
export const UPDATE_LAYOUT = "UPDATE_LAYOUT";
export const DROP_ITEM = "DROP_ITEM";
export const BREAKPOINT_CHANGE = "BREAKPOINT_CHANGE";
export const DRAG_STOP = "DRAG_STOP";
export const RESIZE_STOP = "RESIZE_STOP";
export const DELETE_ACTION = "DELETE_ACTION";
export const START_DRAG = "START_DRAG";

export const selectLayoutAction = layoutType => dispatch => {
  dispatch({ type: SELECT_LAYOUT, payload: { layoutType } });
};

export const updateLayoutAction = layoutUpdate => dispatch => {
  dispatch({ type: UPDATE_LAYOUT, payload: { layoutUpdate } });
};

export const onDrop = (item, dragId, limits) => dispatch => {
  const itemWithLimits = {
    ...item,
    ...limits
  };
  dispatch({ type: DROP_ITEM, payload: { itemWithLimits, dragId } });
};

export const onBreakpointChange = () => dispatch => {
  dispatch({ type: BREAKPOINT_CHANGE });
};

export const onDragStop = () => dispatch => {
  dispatch({ type: DRAG_STOP });
};

export const onResizeStop = () => dispatch => {
  dispatch({ type: RESIZE_STOP });
};

export const onDragStart = () => dispatch => {
  dispatch({ type: START_DRAG });
};

export const deleteItemAction = indexToRemove => dispatch => {
  dispatch({ type: DELETE_ACTION, payload: { indexToRemove } });
};
