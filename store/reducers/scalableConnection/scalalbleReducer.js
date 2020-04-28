import {
  GET_STORE_PRODUCTS_START,
  GET_STORE_PRODUCTS_SUCCESS,
  GET_STORE_PRODUCTS_FAILED,
  DELETE_PRODUCT_START,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILED,
} from "../../actions/scalablePress/scalablePress";

const initialState = {
  products: [],
  isRetrievingProducts: false,
  isDeletingProduct: false,
  error: "",
};

export function scalableReducer(state = initialState, action) {
  switch (action.type) {
    case GET_STORE_PRODUCTS_START:
      return {
        ...state,
        isRetrievingProducts: true,
      };
    case GET_STORE_PRODUCTS_SUCCESS:
      return {
        ...state,
        isRetrievingProducts: false,
        products: action.payload,
      };
    case GET_STORE_PRODUCTS_FAILED:
      return {
        ...state,
        isRetrievingProducts: false,
        error: action.payload,
      };
    case DELETE_PRODUCT_START:
      return {
        ...state,
        isDeletingProduct: true,
      };
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        isDeletingProduct: false,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    case DELETE_PRODUCT_FAILED:
      return {
        ...state,
        isDeletingProduct: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
