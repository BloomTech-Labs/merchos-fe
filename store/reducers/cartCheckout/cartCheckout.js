import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_ITEM,
} from '../../actions/storeCheckout/storeCheckout'

const initialState = {
  cart: [],
  checkout: {
    subTotal: 0.0,
    taxes: 0.0,
    shipping: 0.0,
    total: 0.0,
  },
}

export const cartCheckoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
        checkout: {
          ...state.checkout,
          subTotal: state.checkout.subTotal += action.payload.subtotal,
          taxes: state.checkout.taxes += action.payload.taxes,
          shipping: state.checkout.shipping += action.payload.shipping,
          total: state.checkout.total += action.payload.total,
        }
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.itemIdInCart !== action.payload.itemIdInCart),
        checkout: {
          ...state.checkout,
          subTotal: state.checkout.subTotal -= action.payload.subtotal,
          taxes: state.checkout.taxes -= action.payload.taxes,
          shipping: state.checkout.shipping -= action.payload.shipping,
          total: state.checkout.total -= action.payload.total,
        }
      }
    case UPDATE_CART_ITEM:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.itemIdInCart === action.payload.itemIdInCart) {
            return action.payload
          }
          return item
        }),
      }
    default:
      return state
  }
}
