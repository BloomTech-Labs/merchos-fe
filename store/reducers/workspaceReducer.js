import { SELECT_LAYOUT } from "../actions/ShopBuilderActions";
import { UPDATE_LAYOUT } from "../actions/ShopBuilderActions";
import { DROP_ITEM } from "../actions/ShopBuilderActions";
import { BREAKPOINT_CHANGE } from "../actions/ShopBuilderActions";
import { DRAG_STOP } from "../actions/ShopBuilderActions";
import { RESIZE_STOP } from "../actions/ShopBuilderActions";
import { DELETE_ACTION } from "../actions/ShopBuilderActions";
import {
  BasicLayout,
  BlankLayout,
  BasicLayoutContent
} from "../../components/ShopBuilder/Layouts/BasicLayout";

// icons
import BannerIcon from "../../assets/banner.png";
import ProductIcon from "../../assets/product.png";

const initialState = {
  Page: {
    id: "Page",
    title: "Workspace",
    storeName: "Click to edit store name",
    layoutType: ["Blank Layout", "Basic Layout"],
    layout: [
      //This is where the page columns are held which is the layout of the page
    ],
    content: [],
    updatedBreakpoint: true
  },
  SideBar: {
    id: "SideBar",
    layout: [
      {
        id: "banner",
        content: "banner",
        icon: BannerIcon
      },
      {
        id: "product-container",
        content: "products",
        icon: ProductIcon
      },
      {
        id: "store-name",
        content: "store name area"
      }
    ]
  }
};

const workspaceReducer = (state = initialState, action) => {
  const { layoutType, layoutUpdate, item, dragId, indexToRemove } =
    action.payload || {};

  const tempArray = Array.from(state.Page.layout);
  let contentArray = Array.from(state.Page.content);

  switch (action.type) {
    case SELECT_LAYOUT:
      contentArray = [];
      switch (layoutType) {
        case "Basic Layout":
          return {
            ...state,
            Page: {
              ...state.Page,
              layout: BasicLayout,
              content: BasicLayoutContent
            }
          };
        case "Blank Layout":
          return {
            ...state,
            Page: {
              ...state.Page,
              layout: BlankLayout,
              content: contentArray
            }
          };
        default:
          return state;
      }
    case UPDATE_LAYOUT:
      if (!state.Page.updatedBreakpoint) {
        return {
          ...state,
          Page: {
            ...state.Page,
            layout: layoutUpdate,
            updatedBreakpoint: true
          }
        };
      } else {
        return state;
      }

    case DROP_ITEM:
      const insertContent = {
        content: "no content",
        id: `${dragId}-${Date.now().toPrecision()}`
      };
      switch (dragId) {
        case "banner":
          insertContent.content = "banner";
          break;

        case "product-container":
          insertContent.content = "product-container";
          break;

        case "store-name":
          insertContent.content = "store-name";
          break;

        default:
          break;
      }
      contentArray.push(insertContent);
      tempArray.push({
        ...item,
        i: `${state.Page.layout.length}`
      });
      return {
        ...state,
        Page: {
          ...state.Page,
          content: contentArray,
          layout: tempArray,
          updatedBreakpoint: false
        }
      };
    case BREAKPOINT_CHANGE:
      return {
        ...state,
        Page: {
          ...state.Page,
          updatedBreakpoint: true
        }
      };
    case DRAG_STOP:
      return {
        ...state,
        Page: {
          ...state.Page,
          updatedBreakpoint: false
        }
      };
    case RESIZE_STOP:
      return {
        ...state,
        Page: {
          ...state.Page,
          updatedBreakpoint: false
        }
      };

    case DELETE_ACTION:
      tempArray.splice(indexToRemove, 1);
      contentArray.splice(indexToRemove, 1);
      return {
        ...state,
        Page: {
          ...state.Page,
          layout: tempArray,
          content: contentArray,
          updatedBreakpoint: false
        }
      };
    default:
      return state;
  }
};

export default workspaceReducer;
