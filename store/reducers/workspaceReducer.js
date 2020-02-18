const initialState = {
  Page: {
    id: "Page",
    title: "Workspace",
    columns: {
      //This is where the page columns are held which is the layout of the page
      firstColumn: [{ id: "box1", content: "A", height: "150px", order: 1 }],
      secondColumn: [{ id: "box2", content: "B", height: "50px", order: 2 }]
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
