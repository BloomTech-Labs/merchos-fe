import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_ITEM,
} from '../../actions/storeCheckout/storeCheckout'

const initialState = {
  cart: [
    {
      itemIdInCart: 1,
      itemiImage: '',
      itemTitle: 'A Really Cool Shirt',
      itemDescription:
        'A really cool shirt! This is the best item ever. You will look really cool when you wear it. High quality, buy it now!',
      itemQty: 1,
      itemSize: 'MD',
      itemColor: 'Orange',
      itemPrice: 13.99,
    },
    {
      itemIdInCart: 2,
      itemiImage: '',
      itemTitle: 'Swag Dragon Belt',
      itemDescription:
        'A really cool shirt! This is the best item ever. You will look really cool when you wear it. High quality, buy it now!',
      itemQty: 2,
      itemSize: 'LG',
      itemColor: 'Black',
      itemPrice: 19.99,
    },
    {
      itemIdInCart: 3,
      itemiImage: '',
      itemTitle: 'Hip T-Shirt',
      itemDescription:
        'A really cool shirt! This is the best item ever. You will look really cool when you wear it. High quality, buy it now!',
      itemQty: 1,
      itemSize: 'LG',
      itemColor: 'White',
      itemPrice: 9.99,
    },
  ],
  checkout: {
    subTotal: 43.97,
    taxes: 0.0,
    shipping: 0.0,
    total: 43.97,
  },
}

export const cartCheckoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedTotal = action.payload.itemPrice
      return {
        ...state,
        cart: [...state.cart, action.payload],
        checkout: {
          ...state.checkout,
          subTotal: (state.checkout.subTotal +=
            action.payload.subtotal).toFixed(2),
          total: (state.checkout.total += addedTotal).toFixed(2),
        },
      }
    case REMOVE_FROM_CART:
      const removedTotal = action.payload.itemPrice
      return {
        ...state,
        cart: state.cart.filter(
          (item) => item.itemIdInCart !== action.payload.itemIdInCart
        ),
        checkout: {
          ...state.checkout,
          subTotal: (state.checkout.subTotal -=
            action.payload.itemPrice).toFixed(2),
          total: (state.checkout.total -= removedTotal).toFixed(2),
        },
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
