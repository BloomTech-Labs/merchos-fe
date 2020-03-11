import { SELECT_LAYOUT } from "../actions/ShopBuilderActions";
import { UPDATE_LAYOUT } from "../actions/ShopBuilderActions";
import { BasicLayout } from "../../components/ShopBuilder/Layouts/BasicLayout";
import { contentExample } from "../../components/ShopBuilder/Layouts/BasicLayout";

const initialState = {
  Page: {
    id: "Page",
    title: "Workspace",
    storeName: "Click to edit store name",
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
  const { layoutType, layout } = action.payload || {};

  switch (action.type) {
    case SELECT_LAYOUT:
      switch (layoutType) {
        case "BasicLayout":
          return {
            ...state,
            Page: {
              ...state.Page,
              layout: BasicLayout
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
          layout: layout
        }
      };

    default:
      return state;
  }
};

export default workspaceReducer;
