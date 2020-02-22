import { PAGE_NOT_PRODUCTS } from "../actions/ShopBuilderActions";

const initialState = {
  Page: {
    id: "Page",
    title: "Workspace",
    columns: {
      //This is where the page columns are held which is the layout of the page
      asdfdsafd: {
        id: "Monster Image",
        items: [{ id: "box1", content: "Monster Image", height: "750px" }],
        order: 1,
        type: "Monster"
      },
      hlksdfdf: {
        id: "secondColumn",
        items: [
          { id: "box2", content: "Double Size", height: "150px", order: 2 }
        ],
        type: "Double"
      },
      asdfssafdsfdfs: {
        id: "stuff",
        items: [
          { id: "box3", content: "Regular Banner", height: "75px", order: 1 }
        ]
      },
      asdfasdf: {
        id: "Products",
        items: [
          { id: "0", content: "A", height: "642px" },
          { id: "1", content: "B", height: "642px" },
          { id: "2", content: "C", height: "642px" },
          { id: "3", content: "D", height: "642px" },
          { id: "4", content: "E", height: "642px" },
          { id: "5", content: "F", height: "642px" }
        ]
      }
    }
  }
};

const workspaceReducer = (state = initialState, action) => {
  const { draggableId, source, destination } = action.payload
    ? action.payload
    : { draggableId: 0, source: 0, destination: 0 };

  const stateArray = Object.entries(state.Page.columns);

  switch (action.type) {
    case PAGE_NOT_PRODUCTS:
      const draggable = stateArray[source.index];
      stateArray[source.index] = stateArray[destination.index];
      stateArray[destination.index] = draggable;
      console.log("STATE: ", stateArray);
      const newColumnState = Object.fromEntries(
        stateArray.filter(columns => {
          if (columns) {
            return columns;
          }
        })
      );
      console.log("NEW COLUMN: ", newColumnState);
      return {
        ...state,
        Page: {
          ...state.Page,
          columns: newColumnState
        }
      };
    default:
      return state;
  }
};

export default workspaceReducer;
