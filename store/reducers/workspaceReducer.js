import { DRAG_N_DROP } from "../actions/ShopBuilderActions";
import { CHANGE_HEIGHT } from "../actions/ShopBuilderActions";
import { DELETE_ELEMENT } from "../actions/ShopBuilderActions";

const initialState = {
  Page: {
    id: "Page",
    title: "Workspace",
    columns: [
      //This is where the page columns are held which is the layout of the page
      {
        id: "Monster Image",
        items: [{ id: "box1", content: "Monster Image", height: "100px" }],
        order: 1,
        type: "Monster"
      },
      {
        id: "secondColumn",
        items: [
          { id: "box2", content: "Double Size", height: "100px", order: 2 },
          {
            id: "box4",
            content: "half width image",
            height: "100px",
            width: "50%",
            order: 1
          },
          {
            id: "box5",
            content: "half width image",
            height: "100px",
            width: "50%",
            order: 1
          }
        ],
        order: 2,
        type: "Double"
      },
      {
        id: "stuff",
        items: [
          { id: "box3", content: "Regular Banner", height: "100px", order: 1 }
        ]
      },
      {
        id: "Products",
        items: [
          { id: "0", content: "A", height: "100px" },
          { id: "1", content: "B", height: "100px" },
          { id: "2", content: "C", height: "100px" },
          { id: "3", content: "D", height: "100px" },
          { id: "4", content: "E", height: "100px" },
          { id: "5", content: "F", height: "100px" }
        ]
      }
    ]
  }
};

const workspaceReducer = (state = initialState, action) => {
  const { draggableId, source, destination, dropArea, indexOfItem } =
    action.payload || {};

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
      //already declared above in Change Height this is here for reference
      // const { dropArea, indexOfItem } = action.payload;

      tempArr[dropArea].items.splice(indexOfItem, 1);

      return {
        ...state,
        Page: {
          ...state.Page,
          columns: tempArr
        }
      };
    default:
      return state;
  }
};

export default workspaceReducer;
