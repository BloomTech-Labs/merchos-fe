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
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
      }
    case UPDATE_CART_ITEM:
      return {
        ...state,
      }
    default:
      return state
  }
}
