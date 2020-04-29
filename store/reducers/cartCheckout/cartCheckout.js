import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_ITEM
} from "../../actions/storeCheckout/storeCheckout";

const initialState = {
  cart: [
    {
      itemIdInCart: 1,
      itemiImage: "",
      itemTitle: "A Really Cool Shirt",
      itemDescription:
        "A really cool shirt! This is the best item ever. You will look really cool when you wear it. High quality, buy it now!",
      itemQty: 1,
      itemSize: "MD",
      itemColor: "Orange",
      itemPrice: 13.99
    },
    {
      itemIdInCart: 2,
      itemiImage: "",
      itemTitle: "A Really Cool Hat",
      itemDescription:
        "A really cool shirt! This is the best item ever. You will look really cool when you wear it. High quality, buy it now!",
      itemQty: 2,
      itemSize: "Lg",
      itemColor: "Black",
      itemPrice: 13.99
    },
    {
      itemIdInCart: 3,
      itemiImage: "",
      itemTitle: "A Really Cool Shirt",
      itemDescription:
        "A really cool shirt! This is the best item ever. You will look really cool when you wear it. High quality, buy it now!",
      itemQty: 1,
      itemSize: "LG",
      itemColor: "White",
      itemPrice: 13.99
    }
  ],
  checkout: {
    subTotal: 0.0,
    taxes: 0.0,
    shipping: 0.0,
    total: 0.0
  }
};

export const cartCheckoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        checkout: {
          ...state.checkout,
          subTotal: (state.checkout.subTotal += action.payload.subtotal),
          taxes: (state.checkout.taxes += action.payload.taxes),
          shipping: (state.checkout.shipping += action.payload.shipping),
          total: (state.checkout.total += action.payload.total)
        }
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(
          item => item.itemIdInCart !== action.payload.itemIdInCart
        ),
        checkout: {
          ...state.checkout,
          subTotal: (state.checkout.subTotal -= action.payload.subtotal),
          taxes: (state.checkout.taxes -= action.payload.taxes),
          shipping: (state.checkout.shipping -= action.payload.shipping),
          total: (state.checkout.total -= action.payload.total)
        }
      };
    case UPDATE_CART_ITEM:
      return {
        ...state,
        cart: state.cart.map(item => {
          if (item.itemIdInCart === action.payload.itemIdInCart) {
            return action.payload;
          }
          return item;
        })
      };
    default:
      return state;
  }
};
