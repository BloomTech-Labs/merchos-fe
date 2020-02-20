export const PAGE_NOT_PRODUCTS = "PAGE_NOT_PRODUCTS";

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

  if (source.droppableId !== destination.droppableId) {
    dispatch({
      type: PAGE_NOT_PRODUCTS,
      payload: dropValue
    });
  }
};
