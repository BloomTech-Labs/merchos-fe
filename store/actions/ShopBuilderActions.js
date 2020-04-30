export const SELECT_LAYOUT = "SELECT_LAYOUT";
export const UPDATE_LAYOUT = "UPDATE_LAYOUT";
export const DROP_ITEM = "DROP_ITEM";
export const BREAKPOINT_CHANGE = "BREAKPOINT_CHANGE";
export const DRAG_STOP = "DRAG_STOP";
export const RESIZE_STOP = "RESIZE_STOP";
export const DELETE_ACTION = "DELETE_ACTION";
export const SET_IMAGE_ACTION = "SET_IMAGE_ACTION";
export const SET_CAROUSEL_ACTION = "SET_CAROUSEL_ACTION";
export const UPDATE_ITEM = "UPDATE_ITEM";

export const selectLayoutAction = (layoutType) => (dispatch) => {
  dispatch({ type: SELECT_LAYOUT, payload: { layoutType } });
};

export const updateLayoutAction = (layoutUpdate) => (dispatch) => {
  dispatch({ type: UPDATE_LAYOUT, payload: { layoutUpdate } });
};

export const onDrop = (item, dragId, limits) => (dispatch) => {
  const itemWithLimits = {
    ...item,
    ...limits,
  };
  dispatch({ type: DROP_ITEM, payload: { itemWithLimits, dragId } });
};

export const onBreakpointChange = () => (dispatch) => {
  dispatch({ type: BREAKPOINT_CHANGE });
};

export const onDragStop = (dragOld, dragNew) => (dispatch) => {
  if (dragOld.x !== dragNew.x || dragOld.y !== dragNew.y) {
    dispatch({ type: DRAG_STOP });
  }
};

export const onResizeStop = (resizeOld, resizeNew) => (dispatch) => {
  if (resizeOld.w !== resizeNew.w || resizeOld.h !== resizeNew.h) {
    dispatch({ type: RESIZE_STOP });
  }
};

export const deleteItemAction = (indexToRemove) => (dispatch) => {
  dispatch({ type: DELETE_ACTION, payload: { indexToRemove } });
};

export const setImageAction = (imageSrc, gridItemLocation) => (dispatch) => {
  dispatch({ type: SET_IMAGE_ACTION, payload: { imageSrc, gridItemLocation } });
};

export const setCarouselAction = (imageArr, gridItemLocation) => (dispatch) => {
  dispatch({
    type: SET_CAROUSEL_ACTION,
    payload: { imageArr, gridItemLocation },
  });
};

export const updateItem = (item, name) => (dispatch) => {
  dispatch({ type: UPDATE_ITEM, payload: { item, name } });
};
