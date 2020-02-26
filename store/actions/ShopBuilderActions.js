export const DRAG_N_DROP = "DRAG_N_DROP";
export const CHANGE_HEIGHT = "CHANGE_HEIGHT";
export const DELETE_ELEMENT = "DELETE_ELEMENT";

export const onDragEnd = dropValue => dispatch => {
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

  //if (destination.droppableId !== source.droppableId) {
  console.log("moving from one container to another");
  dispatch({
    type: DRAG_N_DROP,
    payload: dropValue
  });
  //}

  return;
};

export const changeEleHeight = (dropArea, indexOfItem) => dispatch => {
  dispatch({ type: CHANGE_HEIGHT, payload: { dropArea, indexOfItem } });
};

export const deleteElement = (dropArea, indexOfItem) => dispatch => {
  dispatch({ type: DELETE_ELEMENT, payload: { dropArea, indexOfItem } });
};
