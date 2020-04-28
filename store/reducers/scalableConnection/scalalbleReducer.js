import {
  GET_STORE_PRODUCTS_START,
  GET_STORE_PRODUCTS_SUCCESS,
  GET_STORE_PRODUCTS_FAILED,
  DELETE_PRODUCT_START,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILED,
  ADD_PRODUCT_TO_STORE_START,
  ADD_PRODUCT_TO_STORE_SUCCESS,
  ADD_PRODUCT_TO_STORE_FAILED,
} from "../../actions/scalablePress/scalablePress";

const initialState = {
  displayProducts: [], // products to display on webpages.
  storeProducts: [], // local products stored before they are sent off
  isRetrievingProducts: false,
  isDeletingProduct: false,
  error: "",
};

export function scalableReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT_TO_STORE_START:
      return {
        ...state,
        isAddingToStore: true,
      };
    case ADD_PRODUCT_TO_STORE_SUCCESS:
      return {
        ...state,
        isAddingToStore: false,
        storeProducts: [...storeProducts, action.payload],
      };
    case ADD_PRODUCT_TO_STORE_FAILED:
      return {
        ...state,
        isAddingToStore: false,
        error: action.payload,
      };
    case GET_STORE_PRODUCTS_START:
      return {
        ...state,
        isRetrievingProducts: true,
      };
    case GET_STORE_PRODUCTS_SUCCESS:
      return {
        ...state,
        isRetrievingProducts: false,
        displayProducts: action.payload,
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
        displayProducts: state.displayProducts.filter(
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
