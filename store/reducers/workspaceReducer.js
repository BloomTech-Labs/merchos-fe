const initialState = {
  Page: {
    id: "Page",
    title: "Workspace",
    columns: {
      //This is where the page columns are held which is the layout of the page
      firstColumn: [{ id: "box1", content: "got stuff" }]
    }
  }
};

const workspaceReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default workspaceReducer;
