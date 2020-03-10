export const DRAG_N_DROP = "DRAG_N_DROP";
export const DRAG_N_DROP_PRODUCTS = "DRAG_N_DROP_PRODUCTS";
export const CHANGE_HEIGHT = "CHANGE_HEIGHT";
export const DELETE_ELEMENT = "DELETE_ELEMENT";
export const CHANGE_STORE_NAME = "CHANGE_STORE_NAME";
export const SELECT_LAYOUT = "SELECT_LAYOUT";
export const SET_PRODUCT_ID = "SET_PRODUCT_ID";
export const CREATE_DRAG_ELEMENT = "CREATE_DRAG_ELEMENT";

export const onDragEndAction = dropValue => dispatch => {
  const { draggableId, source, destination, type } = dropValue || {};
  console.log("DROP_VALUE: ", dropValue);
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

  if (RegExp(".*PRODUCTS.*", "g").test(destination.droppableId)) {
    if (source.droppableId === "SideBarProducts") {
      dispatch({
        type: CREATE_DRAG_ELEMENT,
        payload: dropValue
      });
      return;
    }
    dispatch({ type: DRAG_N_DROP_PRODUCTS, payload: dropValue });
  } else {
    if (source.droppableId === "SideBarProducts") {
      dispatch({
        type: CREATE_DRAG_ELEMENT,
        payload: dropValue
      });
      return;
    }
    dispatch({
      type: DRAG_N_DROP,
      payload: dropValue
    });
  }

  return;
};

export const changeEleHeightAction = (dropArea, clickId) => dispatch => {
  dispatch({ type: CHANGE_HEIGHT, payload: { dropArea, clickId } });
};

export const deleteElementAction = (dropArea, clickId) => dispatch => {
  dispatch({
    type: DELETE_ELEMENT,
    payload: { dropArea, clickId }
  });
};

export const changeStoreNameAction = storeName => dispatch => {
  dispatch({ type: CHANGE_STORE_NAME, payload: { storeName } });
};

export const selectLayoutAction = layoutType => dispatch => {
  dispatch({ type: SELECT_LAYOUT, payload: { layoutType } });
};

export const setProductIdAction = correctionId => dispatch => {
  dispatch({ type: SET_PRODUCT_ID, payload: { correctionId } });
};
