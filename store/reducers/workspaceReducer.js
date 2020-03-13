import { SELECT_LAYOUT } from "../actions/ShopBuilderActions";
import { UPDATE_LAYOUT } from "../actions/ShopBuilderActions";
import { DROP_ITEM } from "../actions/ShopBuilderActions";
import {
  BasicLayout,
  BlankLayout
} from "../../components/ShopBuilder/Layouts/BasicLayout";

// icons
import BannerIcon from '../../assets/banner.png'
import ProductIcon from '../../assets/product.png'

const initialState = {
  Page: {
    id: "Page",
    title: "Workspace",
    storeName: "Click to edit store name",
    layoutType: ["Blank Layout", "Basic Layout"],
    layout: [
      //This is where the page columns are held which is the layout of the page
    ],
    content: []
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
  const { layoutType, layoutUpdate, item } = action.payload || {};

  const tempArray = Array.from(state.Page.layout);
  const contentArray = Array.from(state.Page.content);

  switch (action.type) {
    case SELECT_LAYOUT:
      switch (layoutType) {
        case "Basic Layout":
          for (let i = 0; i < BasicLayout.length; i++) {
            contentArray.push({ content: "+" });
          }
          return {
            ...state,
            Page: {
              ...state.Page,
              layout: BasicLayout,
              content: contentArray
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
          layout: layoutUpdate
        }
      };

    case DROP_ITEM:
      contentArray.push({ content: "+" });
      tempArray.push({
        ...item,
        i: `${state.Page.layout.length}`
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
