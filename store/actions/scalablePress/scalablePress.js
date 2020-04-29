import { axiosWithKey } from "../../../utils/axiosWithAuth";

export const GET_STORE_PRODUCTS_START = "GET_STORE_PRODUCTS_START";
export const GET_STORE_PRODUCTS_SUCCESS = "GET_STORE_PRODUCTS_SUCCESS";
export const GET_STORE_PRODUCTS_FAILED = "GET_STORE_PRODUCTS_FAILED";

export const GET_STORE_SINGLE_PRODUCTS_START =
  "GET_STORE_SINGLE_PRODUCTS_START";
export const GET_STORE_SINGLE_PRODUCTS_SUCCESS =
  "GET_STORE_SINGLEPRODUCTS_SUCCESS";
export const GET_STORE_SINGLE_PRODUCTS_FAILED =
  "GET_STORE_SINGLEPRODUCTS_FAILED";

export const DELETE_PRODUCT_START = "DELETE_PRODUCT_START";
export const DELETE_PRODUCT_SUCCESS = "DELETE_PRODUCT_SUCCESS";
export const DELETE_PRODUCT_FAILED = "DELETE_PRODUCT_FAILED";

export const ADD_PRODUCT_TO_STORE_START = "ADD_PRODUCT_TO_STORE_START";
export const ADD_PRODUCT_TO_STORE_SUCCESS = "ADD_PRODUCT_TO_STORE_SUCCESS";
export const ADD_PRODUCT_TO_STORE_FAILED = "ADD_PRODUCT_TO_STORE_FAILED";

export const addProductToStore = (product) => (dispatch) => {
  dispatch({ type: ADD_PRODUCT_TO_STORE_START });
  if (!product.product_id || !product.color) {
    dispatch({
      type: ADD_PRODUCT_TO_STORE_FAILED,
      payload: "Information is missing from the product. please add (color, product).",
    });
  } else {
    dispatch({ type: ADD_PRODUCT_TO_STORE_SUCCESS, payload: product });
  }
};

export const getStoreProducts = (store_id) => (dispatch) => {
  dispatch({ type: GET_STORE_PRODUCTS_START });
  axiosWithKey()
    .get(`/products/${store_id}`)
    .then((res) => {
      dispatch({ type: SUBMIT_DESIGN_FOR_REVIEW_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: SUBMIT_DESIGN_FOR_REVIEW_FAILED, payload: err.message });
    });
};

export const getSingleStoreProducts = (product_id) => (dispatch) => {
  dispatch({ type: GET_STORE_SINGLE_PRODUCTS_START });
  axiosWithKey()
    .get(`/products/product/${product_id}`)
    .then((res) => {
      dispatch({ type: GET_STORE_SINGLE_PRODUCTS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({
        type: GET_STORE_SINGLE_PRODUCTS_FAILED,
        payload: err.message,
      });
    });
};

export const deleteProduct = (product_id) => (dispatch) => {
  dispatch({ type: DELETE_PRODUCT_START });
  axiosWithKey()
    .get(`/products/product/${product_id}`)
    .then((res) => {
      dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: product_id });
    })
    .catch((err) => {
      dispatch({ type: DELETE_PRODUCT_FAILED, payload: err.message });
    });
};
