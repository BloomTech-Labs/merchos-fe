import { SELECT_LAYOUT } from "../actions/ShopBuilderActions";
import { UPDATE_LAYOUT } from "../actions/ShopBuilderActions";
import { DROP_ITEM } from "../actions/ShopBuilderActions";
import {
  BasicLayout,
  BlankLayout
} from "../../components/ShopBuilder/Layouts/BasicLayout";
import { contentExample } from "../../components/ShopBuilder/Layouts/BasicLayout";

const initialState = {
  Page: {
    id: "Page",
    title: "Workspace",
    storeName: "Click to edit store name",
    layoutType: ["Blank Layout", "Basic Layout"],
    layout: [
      { i: "Filler", x: 0, y: 0, w: 1, h: 1 }
      //This is where the page columns are held which is the layout of the page
    ],
    // content: [{content: }]
    content: [{ content: "+" }]
  },
  SideBar: {
    id: "SideBar",
    layout: [
      {
        id: "banner",
        content: "banner"
      },
      {
        id: "product-container",
        content: "products"
      },
      {
        id: "store-name",
        content: "store name area"
      }
    ]
  }
};

const workspaceReducer = (state = initialState, action) => {
  const { layoutType, layoutUpdated, item } = action.payload || {};

  const tempArray = Array.from(state.Page.layout);
  const contentArray = Array.from(state.Page.content);

  switch (action.type) {
    case SELECT_LAYOUT:
      switch (layoutType) {
        case "Basic Layout":
          return {
            ...state,
            Page: {
              ...state.Page,
              layout: BasicLayout
            }
          };
        case "Blank Layout":
          return {
            ...state,
            Page: {
              ...state.Page,
              layout: BlankLayout
            }
          };
        default:
          return state;
      }
    case UPDATE_LAYOUT:
      return {
        ...state,
        Page: {
          ...state.Page,
          layout: layoutUpdated
        }
      };

    case DROP_ITEM:
      console.log("ITEM_IN_DROP_ITEM: ", item);
      contentArray.push({ content: "+" });
      tempArray.push({
        ...item,
        i: `${state.Page.layout.length - 1}`
      });
      return {
        ...state,
        Page: {
          ...state.Page,
          content: contentArray,
          layout: tempArray
        }
      };

    default:
      return state;
  }
};

export default workspaceReducer;
