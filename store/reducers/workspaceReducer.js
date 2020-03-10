import { DRAG_N_DROP } from "../actions/ShopBuilderActions";
import { DRAG_N_DROP_PRODUCTS } from "../actions/ShopBuilderActions";
import { CHANGE_HEIGHT } from "../actions/ShopBuilderActions";
import { DELETE_ELEMENT } from "../actions/ShopBuilderActions";
import { CHANGE_STORE_NAME } from "../actions/ShopBuilderActions";
import { SELECT_LAYOUT } from "../actions/ShopBuilderActions";
import { SET_PRODUCT_ID } from "../actions/ShopBuilderActions";
import { CREATE_DRAG_ELEMENT } from "../actions/ShopBuilderActions";
import { BasicLayout } from "../../components/ShopBuilder/Layouts/BasicLayout";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  Page: {
    id: "Page",
    title: "Workspace",
    storeName: "Click to edit store name",
    columns: [
      //This is where the page columns are held which is the layout of the page
    ],
    isLive: false
  },
  SideBar: {
    id: "SideBarProducts",
    column: [
      {
        items: [
          { id: "product-1", content: "Product Default", type: "PRODUCT" },
          { id: "product-2", content: "General Default", type: "GENERAL" },
          { id: "product-3", content: "General Default", type: "GENERAL" }
        ]
      }
    ]
  },
  SideBar: {
    id: "SideBarProducts",
    column: [
      {
        items: [
          { id: "product-1", content: "shirt" },
          { id: "product-2", content: "pants" },
          { id: "product-3", content: "hats" }
        ]
      }
    ]
  }
};

const workspaceReducer = (state = initialState, action) => {
  const {
    draggableId,
    source,
    destination,
    dropArea,
    clickId,
    storeName,
    layoutType,
    correctionId
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

    case CREATE_DRAG_ELEMENT:
      const dragProducts = Array.from(state.SideBar.column);
      const product = dragProducts[0].items[source.index];
      console.log("PRODUCT: ", product);

      const destinationLocationCreate = destination.droppableId.split("-");

      if (destination.droppableId === "Page") {
        tempArr.splice(destination.index, 0, {
          ...product,
          id: `${product.id}-${uuidv4()}`,
          items: [{ ...product, id: uuidv4() }]
        });
      } else {
        if (destinationLocationCreate.length > 1) {
          tempArr[Number(destinationLocationCreate[0])].items.splice(
            Number(destinationLocationCreate[2]),
            0,
            {
              ...product,
              id: `${product.id}-${uuidv4()}`,
              items: [{ ...product, id: uuidv4() }]
            }
          );
        } else {
          tempArr[Number(destinationLocationCreate[0])].items.splice(
            destination.index,
            0,
            {
              id: `${product.id}-${uuidv4()}`,
              items: [{ ...product, id: uuidv4() }]
            }
          );
        }
      }
      return {
        ...state,
        Page: {
          ...state.Page,
          columns: tempArr
        }
      };

    case DRAG_N_DROP_PRODUCTS:
      const sourceLocation = draggableId.split("-");
      const destinationLocation = destination.droppableId.split("-");
      // destinationIndex result comes from calculating destinationLocation[2]
      // which is the limit of the product row multiplied by the
      // destinationLocation[1] which is the current drop index location of the item
      // and adding the destination.index will give us the actual index
      const destinationIndex =
        destinationLocation[2] * destinationLocation[1] + destination.index;

      const draggableSource =
        tempArr[sourceLocation[0]].items[sourceLocation[2]];
      tempArr[sourceLocation[0]].items.splice(sourceLocation[2], 1);
      tempArr[destinationLocation[0]].items.splice(
        destinationIndex,
        0,
        draggableSource
      );

      return {
        ...state,
        Page: {
          ...state.Page,
          columns: tempArr
        }
      };

    case SET_PRODUCT_ID:
      const correctionIdSplit = correctionId.split("-");
      tempArr[Number(correctionIdSplit[0])].items[
        Number(correctionIdSplit[2])
      ].id = correctionId;

      return {
        ...state,
        Page: {
          ...state.Page,
          columns: tempArr
        }
      };
    case CHANGE_HEIGHT:
      const selectedItem = tempArr[dropArea].items.filter((item, index) => {
        if (item.id === clickId) {
          return { item, index };
        }
      });
      let nextHeight = 0;

      switch (selectedItem[0].item.height) {
        case "75px":
          nextHeight = "150px";
          break;
        case "150px":
          nextHeight = "175px";
          break;
        default:
          nextHeight = "75px";
      }

      tempArr[dropArea].items[selectedItem[0].index].height = nextHeight;

      return {
        ...state,
        Page: {
          ...state.Page,
          columns: tempArr
        }
      };

    case DELETE_ELEMENT:
      const updatedArr = tempArr[dropArea].items.filter(
        item => item.id !== clickId
      );

      tempArr[dropArea].items = updatedArr;

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
