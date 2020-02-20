import { PAGE_NOT_PRODUCTS } from "../actions/ShopBuilderActions";

const initialState = {
  Page: {
    id: "Page",
    title: "Workspace",
    columns: {
      //This is where the page columns are held which is the layout of the page
      asdfdsafd: {
        id: "firstColumn",
        items: [{ id: "box1", content: "A", height: "150px", order: 1 }]
      },
      hlksdfdf: {
        id: "secondColumn",
        items: [{ id: "box2", content: "B", height: "50px", order: 2 }]
      },
      asdfasdf: {
        id: "Products",
        items: [
          { id: "0", content: "A", height: "30px" },
          { id: "1", content: "B", height: "30px" },
          { id: "2", content: "C", height: "30px" },
          { id: "3", content: "D", height: "30px" },
          { id: "4", content: "E", height: "30px" },
          { id: "5", content: "F", height: "30px" }
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
