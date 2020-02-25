import { DRAG_N_DROP } from "../actions/ShopBuilderActions";
import { CHANGE_HEIGHT } from "../actions/ShopBuilderActions";

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
  const { draggableId, source, destination } = action.payload
    ? action.payload
    : { draggableId: 0, source: 0, destination: 0 };

  switch (action.type) {
    case DRAG_N_DROP:
      const sourceId = Number(source.droppableId);
      const destinationId = Number(destination.droppableId);
      const dragNDropArr = Array.from(state.Page.columns);

      const draggable = dragNDropArr[sourceId].items[source.index];

      dragNDropArr[sourceId].items.splice(source.index, 1);
      dragNDropArr[destinationId].items.splice(destination.index, 0, draggable);

      return {
        ...state,
        Page: {
          ...state.Page,
          columns: dragNDropArr
        }
      };
    case CHANGE_HEIGHT:
      const { dropArea, indexOfItem } = action.payload;
      const changHeightArr = Array.from(state.Page.columns);
      console.log("DROP_AREA: ", dropArea);
      console.log("INDEX_OF_ITEM: ", indexOfItem);
      const currentHeight = changHeightArr[dropArea].items[indexOfItem].height;
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

      changHeightArr[dropArea].items[indexOfItem].height = nextHeight;

      return {
        ...state,
        Page: {
          ...state.Page,
          columns: changHeightArr
        }
      };
    default:
      return state;
  }
};

export default workspaceReducer;
