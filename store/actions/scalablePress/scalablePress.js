import { axiosWithKey } from "../../../utils/axiosWithAuth";

export const SUBMIT_DESIGN_FOR_REVIEW_START = "SUBMIT_DESIGN_FOR_REVIEW_START";
export const SUBMIT_DESIGN_FOR_REVIEW_SUCCESS = "SUBMIT_DESIGN_FOR_REVIEW_SUCCESS";
export const SUBMIT_DESIGN_FOR_REVIEW_FAILED = "SUBMIT_DESIGN_FOR_REVIEW_FAILED";

export const SUBMIT_FOR_QUOTE_START = "SUBMIT_QUOTE_START";
export const SUBMIT_FOR_QUOTE_SUCCESS = "SUBMIT_QUOTE_SUCCESS";
export const SUBMIT_FOR_QUOTE_FAILED = "SUBMIT_QUOTE_FAILED";

export const RETRIEVE_DESIGN_START = "RETRIEVE_DESIGN_START";
export const RETRIEVE_DESIGN_SUCCESS = "RETRIEVE_DESIGN_START";
export const RETRIEVE_DESIGN_FAILED = "RETRIEVE_DESIGN_START";

export const RETRIEVE_ALL_DESIGNS_START = "RETRIEVE_DESIGN_START";
export const RETRIEVE_ALL_DESIGNS_SUCCESS = "RETRIEVE_DESIGN_START";
export const RETRIEVE_ALL_DESIGNS_FAILED = "RETRIEVE_DESIGN_START";

export const RETRIEVE_ORDER_STATUS_START = "RETRIEVE_ORDER_STATUS_START";
export const RETRIEVE_ORDER_STATUS_SUCCESS = "RETRIEVE_ORDER_STATUS_SUCCESS";
export const RETRIEVE_ORDER_STATUS_FAILED = "RETRIEVE_ORDER_STATUS_FAILED";

export const submitDesignForReview = (design) => dispatch => {

    dispatch({ type: SUBMIT_DESIGN_FOR_REVIEW_START })

    axiosWithKey().post("/design", design)
        .then((res) => {
            dispatch({ type: SUBMIT_DESIGN_FOR_REVIEW_SUCCESS, payload: res.data })
        })
        .catch((err) => {

            dispatch({ type: SUBMIT_DESIGN_FOR_REVIEW_FAILED, payload: err.message })
        });



}

export const retrieveDesign = (design_id) => dispatch => {

    dispatch({ type: RETRIEVE_DESIGN_START })

    axiosWithKey().get(`/design/${design_id}`)
        .then((res) => {
            dispatch({ type: RETRIEVE_DESIGN_SUCCESS, payload: res.data })
        }).catch((err) => {
            dispatch({ type: RETRIEVE_DESIGN_FAILED, payload: err.message })
        })



}


export const retrieveAllDesigns = () => dispatch => {

    dispatch({ type: RETRIEVE_ALL_DESIGNS_START })

    axiosWithKey().get(`/design`)
        .then((res) => {
            dispatch({ type: RETRIEVE_ALL_DESIGNS_SUCCESS, payload: res.data })
        }).catch((err) => {
            dispatch({ type: RETRIEVE_ALL_DESIGNS_FAILED, payload: err.message })
        })



}
export const submitQuote = (designId, product_options) => dispatch => {

    dispatch({ type: SUBMIT_FOR_QUOTE_START })
    const quoteData = {
        ...product_options,
        designId:designId
    }
    axiosWithKey().post(`/quote`, quoteData)
        .then((res) => {
            dispatch({ type: SUBMIT_FOR_QUOTE_SUCCESS, payload: res.data })
        }).catch((err) => {
            dispatch({ type: SUBMIT_FOR_QUOTE_FAILED, payload: err.message })
        });
}

export const getQuoteStatus = (orderId) => dispatch => {

    dispatch({ type: RETRIEVE_ORDER_STATUS_START })

    axiosWithKey().post(`/quote${orderId}`)
        .then((res) => {
            dispatch({ type: RETRIEVE_ORDER_STATUS_SUCCESS, payload: res.data })
        }).catch((err) => {

            dispatch({ type: RETRIEVE_ORDER_STATUS_FAILED, payload: err.message })
        });


}