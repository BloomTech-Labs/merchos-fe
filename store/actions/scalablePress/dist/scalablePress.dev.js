"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getQuoteStatus = exports.submitQuote = exports.retrieveAllDesigns = exports.retrieveDesign = exports.submitDesignForReview = exports.RETRIEVE_ORDER_STATUS_FAILED = exports.RETRIEVE_ORDER_STATUS_SUCCESS = exports.RETRIEVE_ORDER_STATUS_START = exports.RETRIEVE_ALL_DESIGNS_FAILED = exports.RETRIEVE_ALL_DESIGNS_SUCCESS = exports.RETRIEVE_ALL_DESIGNS_START = exports.RETRIEVE_DESIGN_FAILED = exports.RETRIEVE_DESIGN_SUCCESS = exports.RETRIEVE_DESIGN_START = exports.SUBMIT_FOR_QUOTE_FAILED = exports.SUBMIT_FOR_QUOTE_SUCCESS = exports.SUBMIT_FOR_QUOTE_START = exports.SUBMIT_DESIGN_FOR_REVIEW_FAILED = exports.SUBMIT_DESIGN_FOR_REVIEW_SUCCESS = exports.SUBMIT_DESIGN_FOR_REVIEW_START = void 0;

var _axiosWithAuth = require("../../../utils/axiosWithAuth");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SUBMIT_DESIGN_FOR_REVIEW_START = "SUBMIT_DESIGN_FOR_REVIEW_START";
exports.SUBMIT_DESIGN_FOR_REVIEW_START = SUBMIT_DESIGN_FOR_REVIEW_START;
var SUBMIT_DESIGN_FOR_REVIEW_SUCCESS = "SUBMIT_DESIGN_FOR_REVIEW_SUCCESS";
exports.SUBMIT_DESIGN_FOR_REVIEW_SUCCESS = SUBMIT_DESIGN_FOR_REVIEW_SUCCESS;
var SUBMIT_DESIGN_FOR_REVIEW_FAILED = "SUBMIT_DESIGN_FOR_REVIEW_FAILED";
exports.SUBMIT_DESIGN_FOR_REVIEW_FAILED = SUBMIT_DESIGN_FOR_REVIEW_FAILED;
var SUBMIT_FOR_QUOTE_START = "SUBMIT_QUOTE_START";
exports.SUBMIT_FOR_QUOTE_START = SUBMIT_FOR_QUOTE_START;
var SUBMIT_FOR_QUOTE_SUCCESS = "SUBMIT_QUOTE_SUCCESS";
exports.SUBMIT_FOR_QUOTE_SUCCESS = SUBMIT_FOR_QUOTE_SUCCESS;
var SUBMIT_FOR_QUOTE_FAILED = "SUBMIT_QUOTE_FAILED";
exports.SUBMIT_FOR_QUOTE_FAILED = SUBMIT_FOR_QUOTE_FAILED;
var RETRIEVE_DESIGN_START = "RETRIEVE_DESIGN_START";
exports.RETRIEVE_DESIGN_START = RETRIEVE_DESIGN_START;
var RETRIEVE_DESIGN_SUCCESS = "RETRIEVE_DESIGN_START";
exports.RETRIEVE_DESIGN_SUCCESS = RETRIEVE_DESIGN_SUCCESS;
var RETRIEVE_DESIGN_FAILED = "RETRIEVE_DESIGN_START";
exports.RETRIEVE_DESIGN_FAILED = RETRIEVE_DESIGN_FAILED;
var RETRIEVE_ALL_DESIGNS_START = "RETRIEVE_DESIGN_START";
exports.RETRIEVE_ALL_DESIGNS_START = RETRIEVE_ALL_DESIGNS_START;
var RETRIEVE_ALL_DESIGNS_SUCCESS = "RETRIEVE_DESIGN_START";
exports.RETRIEVE_ALL_DESIGNS_SUCCESS = RETRIEVE_ALL_DESIGNS_SUCCESS;
var RETRIEVE_ALL_DESIGNS_FAILED = "RETRIEVE_DESIGN_START";
exports.RETRIEVE_ALL_DESIGNS_FAILED = RETRIEVE_ALL_DESIGNS_FAILED;
var RETRIEVE_ORDER_STATUS_START = "RETRIEVE_ORDER_STATUS_START";
exports.RETRIEVE_ORDER_STATUS_START = RETRIEVE_ORDER_STATUS_START;
var RETRIEVE_ORDER_STATUS_SUCCESS = "RETRIEVE_ORDER_STATUS_SUCCESS";
exports.RETRIEVE_ORDER_STATUS_SUCCESS = RETRIEVE_ORDER_STATUS_SUCCESS;
var RETRIEVE_ORDER_STATUS_FAILED = "RETRIEVE_ORDER_STATUS_FAILED";
exports.RETRIEVE_ORDER_STATUS_FAILED = RETRIEVE_ORDER_STATUS_FAILED;

var submitDesignForReview = function submitDesignForReview(design) {
  return function (dispatch) {
    dispatch({
      type: SUBMIT_DESIGN_FOR_REVIEW_START
    });
    (0, _axiosWithAuth.axiosWithKey)().post("/design", design).then(function (res) {
      dispatch({
        type: SUBMIT_DESIGN_FOR_REVIEW_SUCCESS,
        payload: res.data
      });
    })["catch"](function (err) {
      dispatch({
        type: SUBMIT_DESIGN_FOR_REVIEW_FAILED,
        payload: err.message
      });
    });
  };
};

exports.submitDesignForReview = submitDesignForReview;

var retrieveDesign = function retrieveDesign(design_id) {
  return function (dispatch) {
    dispatch({
      type: RETRIEVE_DESIGN_START
    });
    (0, _axiosWithAuth.axiosWithKey)().get("/design/".concat(design_id)).then(function (res) {
      dispatch({
        type: RETRIEVE_DESIGN_SUCCESS,
        payload: res.data
      });
    })["catch"](function (err) {
      dispatch({
        type: RETRIEVE_DESIGN_FAILED,
        payload: err.message
      });
    });
  };
};

exports.retrieveDesign = retrieveDesign;

var retrieveAllDesigns = function retrieveAllDesigns() {
  return function (dispatch) {
    dispatch({
      type: RETRIEVE_ALL_DESIGNS_START
    });
    (0, _axiosWithAuth.axiosWithKey)().get("/design").then(function (res) {
      dispatch({
        type: RETRIEVE_ALL_DESIGNS_SUCCESS,
        payload: res.data
      });
    })["catch"](function (err) {
      dispatch({
        type: RETRIEVE_ALL_DESIGNS_FAILED,
        payload: err.message
      });
    });
  };
};

exports.retrieveAllDesigns = retrieveAllDesigns;

var submitQuote = function submitQuote(designId, product_options) {
  return function (dispatch) {
    dispatch({
      type: SUBMIT_FOR_QUOTE_START
    });

    var quoteData = _objectSpread({}, product_options, {
      designId: designId
    });

    (0, _axiosWithAuth.axiosWithKey)().post("/quote", quoteData).then(function (res) {
      dispatch({
        type: SUBMIT_FOR_QUOTE_SUCCESS,
        payload: res.data
      });
    })["catch"](function (err) {
      dispatch({
        type: SUBMIT_FOR_QUOTE_FAILED,
        payload: err.message
      });
    });
  };
};

exports.submitQuote = submitQuote;

var getQuoteStatus = function getQuoteStatus(orderId) {
  return function (dispatch) {
    dispatch({
      type: RETRIEVE_ORDER_STATUS_START
    });
    (0, _axiosWithAuth.axiosWithKey)().post("/quote".concat(orderId)).then(function (res) {
      dispatch({
        type: RETRIEVE_ORDER_STATUS_SUCCESS,
        payload: res.data
      });
    })["catch"](function (err) {
      dispatch({
        type: RETRIEVE_ORDER_STATUS_FAILED,
        payload: err.message
      });
    });
  };
};

exports.getQuoteStatus = getQuoteStatus;