export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const UPDATE_CART_ITEM = 'UPDATE_CART_ITEM'

export const addCartItem = (item) => (dispatch) => {
  const product = {
    ...item,
    itemIdInCart: Date.now()
  }
  dispatch({ type: ADD_TO_CART, payload: product })
}
export const removeCartItem = (item) => (dispatch) =>
  dispatch({ type: REMOVE_FROM_CART, payload: item })

export const updateItemInCart = (item) => dispatch => {
  dispatch({type: UPDATE_CART_ITEM, payload: item })
}