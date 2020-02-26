import { UPDATE_STATE } from "./action";
const initialData = {
  product: {
    p1: { id: "product-1", content: "shirt" },
    p2: { id: "product-2", content: "pants" },
    p3: { id: "product-3", content: "hats" }
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "dnd",
      productIds: ["p1", "p2", "p3"]
    }
  },
  builder: {
    page: {
      id: "page",
      title: "builder",
      productIds: []
    }
  },
  columnOrder: ["column-1"]
};

export const sidebar = (state = initialData, action) => {
  switch (action.type) {
    case UPDATE_STATE:
      return {
        ...state,
        productIds: action.payload
      };
    default:
      return state;
  }
};
