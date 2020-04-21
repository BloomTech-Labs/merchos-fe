import {
    SUBMIT_DESIGN_FOR_REVIEW_START,
    SUBMIT_DESIGN_FOR_REVIEW_SUCCESS,
    SUBMIT_DESIGN_FOR_REVIEW_FAILED,
    RETRIEVE_DESIGN_START,
    RETRIEVE_DESIGN_SUCCESS,
    RETRIEVE_DESIGN_FAILED,
    SUBMIT_FOR_QUOTE_START,
    SUBMIT_FOR_QUOTE_SUCCESS,
    SUBMIT_FOR_QUOTE_FAILED,
    RETRIEVE_ORDER_STATUS_START,
    RETRIEVE_ORDER_STATUS_SUCCESS,
    RETRIEVE_ORDER_STATUS_FAILED
} from "../../actions/scalablePress/scalablePress";

const initialState = {
    isSubmittingDesign: false,
    isRetrievingDesign: false,
    isSubmittingQuote: false,
    isRetrievingOrderStatus: false,
    error: ''
}

export function scalableReducer(state = initialState, action) {
    switch (action.type) {
        case SUBMIT_DESIGN_FOR_REVIEW_START:
            return {
                ...state,
                isSubmittingDesign: true
            }
        case SUBMIT_DESIGN_FOR_REVIEW_SUCCESS:
            return {
                ...state,
                isSubmittingDesign: false
            }
        case SUBMIT_DESIGN_FOR_REVIEW_FAILED:
            return {
                ...state,
                isSubmittingDesign: false,
                error: action.payload
            }
        case RETRIEVE_DESIGN_START:
            return {
                ...state,
                isRetrievingDesign: true
            }
        case RETRIEVE_DESIGN_SUCCESS:
            return {
                ...state,
                isRetrievingDesign: false
            }
        case RETRIEVE_DESIGN_FAILED:
            return {
                ...state,
                isRetrievingDesign: false,
                error: action.payload
            }

        case SUBMIT_FOR_QUOTE_START:
            return {
                ...state,
                isSubmittingDesign: true
            }
        case SUBMIT_FOR_QUOTE_SUCCESS:
            return {
                ...state,
                isSubmittingDesign: false
            }
        case SUBMIT_FOR_QUOTE_FAILED:
            return {
                ...state,
                isSubmittingDesign: false,
                error: action.payload
            }
        case RETRIEVE_ORDER_STATUS_START:
            return {
                ...state,
                isRetrievingDesign: true
            }
        case RETRIEVE_ORDER_STATUS_SUCCESS:
            return {
                ...state,
                isRetrievingDesign: false
            }
        case RETRIEVE_ORDER_STATUS_FAILED:
            return {
                ...state,
                isRetrievingDesign: false,
                error: action.payload
            }
    }
}