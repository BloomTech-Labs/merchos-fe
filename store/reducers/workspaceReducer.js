import { DRAG_N_DROP } from "../actions/ShopBuilderActions";
import { CHANGE_HEIGHT } from "../actions/ShopBuilderActions";
import { DELETE_ELEMENT } from "../actions/ShopBuilderActions";
import { CHANGE_STORE_NAME } from "../actions/ShopBuilderActions";
import { SELECT_LAYOUT } from "../actions/ShopBuilderActions";
import { BasicLayout } from "../../components/ShopBuilder/Layouts/BasicLayout";

const initialState = {
  Page: {
    id: "Page",
    title: "Workspace",
    storeName: "Click to edit store name",
    columns: [
      //This is where the page columns are held which is the layout of the page
    ]
  }
};

const workspaceReducer = (state = initialState, action) => {
  const {
    draggableId,
    source,
    destination,
    dropArea,
    indexOfItem,
    storeName,
    layoutType
  } = action.payload || {};

  const tempArr = Array.from(state.Page.columns);

  switch (action.type) {
    case DRAG_N_DROP:
      const sourceId = Number(source.droppableId);
      const destinationId = Number(destination.droppableId);

      const draggable = tempArr[sourceId].items[source.index];

      tempArr[sourceId].items.splice(source.index, 1);
      tempArr[destinationId].items.splice(destination.index, 0, draggable);

      return {
        ...state,
        Page: {
          ...state.Page,
          columns: tempArr
        }
      };

    case CHANGE_HEIGHT:
      const currentHeight = tempArr[dropArea].items[indexOfItem].height;
      let nextHeight = 0;

      switch (currentHeight) {
        case "75px":
          nextHeight = "150px";
          break;
        case "150px":
          nextHeight = "175px";
          break;
        default:
          nextHeight = "75px";
      }

      tempArr[dropArea].items[indexOfItem].height = nextHeight;

      return {
        ...state,
        Page: {
          ...state.Page,
          columns: tempArr
        }
      };

    case DELETE_ELEMENT:
      tempArr[dropArea].items.splice(indexOfItem, 1);

      return {
        ...state,
        Page: {
          ...state.Page,
          columns: tempArr
        }
      };

    case CHANGE_STORE_NAME:
      return {
        ...state,
        Page: {
          ...state.Page,
          storeName: storeName
        }
      };

    case SELECT_LAYOUT:
      switch (layoutType) {
        case "BasicLayout":
          return {
            ...state,
            Page: {
              ...state.Page,
              columns: BasicLayout
            }
          };
        default:
          return state;
      }

    default:
      return state;
  }
};

export default workspaceReducer;
