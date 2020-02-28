export const DRAG_N_DROP = "DRAG_N_DROP";
export const CHANGE_HEIGHT = "CHANGE_HEIGHT";
export const DELETE_ELEMENT = "DELETE_ELEMENT";
export const CHANGE_STORE_NAME = "CHANGE_STORE_NAME";
export const SELECT_LAYOUT = "SELECT_LAYOUT";

export const onDragEndAction = dropValue => dispatch => {
  const { draggableId, source, destination } = dropValue;
  if (!destination) {
    console.log("here destination end");
    return;
  }

  if (
    destination.droppableId === source.droppableId &&
    destination.index === source.index
  ) {
    console.log("same place");
    return;
  }
  console.log("moving from one container to another");
  dispatch({
    type: DRAG_N_DROP,
    payload: dropValue
  });

  return;
};

export const changeEleHeightAction = (dropArea, indexOfItem) => dispatch => {
  dispatch({ type: CHANGE_HEIGHT, payload: { dropArea, indexOfItem } });
};

export const deleteElementAction = (dropArea, indexOfItem) => dispatch => {
  dispatch({ type: DELETE_ELEMENT, payload: { dropArea, indexOfItem } });
};

export const changeStoreNameAction = storeName => dispatch => {
  dispatch({ type: CHANGE_STORE_NAME, payload: { storeName } });
};

export const selectLayoutAction = layoutType => dispatch => {
  dispatch({ type: SELECT_LAYOUT, payload: { layoutType } });
};
