"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scalableReducer = scalableReducer;

var _scalablePress = require("../../actions/scalablePress/scalablePress");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  isSubmittingDesign: false,
  isRetrievingDesign: false,
  isSubmittingQuote: false,
  isRetrievingOrderStatus: false,
  error: ''
};

function scalableReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _scalablePress.SUBMIT_DESIGN_FOR_REVIEW_START:
      return _objectSpread({}, state, {
        isSubmittingDesign: true
      });

    case _scalablePress.SUBMIT_DESIGN_FOR_REVIEW_SUCCESS:
      return _objectSpread({}, state, {
        isSubmittingDesign: false
      });

    case _scalablePress.SUBMIT_DESIGN_FOR_REVIEW_FAILED:
      return _objectSpread({}, state, {
        isSubmittingDesign: false,
        error: action.payload
      });

    case _scalablePress.RETRIEVE_DESIGN_START:
      return _objectSpread({}, state, {
        isRetrievingDesign: true
      });

    case _scalablePress.RETRIEVE_DESIGN_SUCCESS:
      return _objectSpread({}, state, {
        isRetrievingDesign: false
      });

    case _scalablePress.RETRIEVE_DESIGN_FAILED:
      return _objectSpread({}, state, {
        isRetrievingDesign: false,
        error: action.payload
      });

    case _scalablePress.SUBMIT_FOR_QUOTE_START:
      return _objectSpread({}, state, {
        isSubmittingDesign: true
      });

    case _scalablePress.SUBMIT_FOR_QUOTE_SUCCESS:
      return _objectSpread({}, state, {
        isSubmittingDesign: false
      });

    case _scalablePress.SUBMIT_FOR_QUOTE_FAILED:
      return _objectSpread({}, state, {
        isSubmittingDesign: false,
        error: action.payload
      });

    case _scalablePress.RETRIEVE_ORDER_STATUS_START:
      return _objectSpread({}, state, {
        isRetrievingDesign: true
      });

    case _scalablePress.RETRIEVE_ORDER_STATUS_SUCCESS:
      return _objectSpread({}, state, {
        isRetrievingDesign: false
      });

    case _scalablePress.RETRIEVE_ORDER_STATUS_FAILED:
      return _objectSpread({}, state, {
        isRetrievingDesign: false,
        error: action.payload
      });
  }
}