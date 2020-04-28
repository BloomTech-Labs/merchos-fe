"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.scalableReducer=scalableReducer;var _scalablePress=require("../../actions/scalablePress/scalablePress");function ownKeys(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);e&&(s=s.filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})),t.push.apply(t,s)}return t}function _objectSpread(r){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?ownKeys(t,!0).forEach(function(e){_defineProperty(r,e,t[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):ownKeys(t).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(t,e))})}return r}function _defineProperty(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var initialState={isSubmittingDesign:!1,isRetrievingDesign:!1,isSubmittingQuote:!1,isRetrievingOrderStatus:!1,error:""};function scalableReducer(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:initialState,r=1<arguments.length?arguments[1]:void 0;switch(r.type){case _scalablePress.SUBMIT_DESIGN_FOR_REVIEW_START:return _objectSpread({},e,{isSubmittingDesign:!0});case _scalablePress.SUBMIT_DESIGN_FOR_REVIEW_SUCCESS:return _objectSpread({},e,{isSubmittingDesign:!1});case _scalablePress.SUBMIT_DESIGN_FOR_REVIEW_FAILED:return _objectSpread({},e,{isSubmittingDesign:!1,error:r.payload});case _scalablePress.RETRIEVE_DESIGN_START:return _objectSpread({},e,{isRetrievingDesign:!0});case _scalablePress.RETRIEVE_DESIGN_SUCCESS:return _objectSpread({},e,{isRetrievingDesign:!1});case _scalablePress.RETRIEVE_DESIGN_FAILED:return _objectSpread({},e,{isRetrievingDesign:!1,error:r.payload});case _scalablePress.SUBMIT_FOR_QUOTE_START:return _objectSpread({},e,{isSubmittingDesign:!0});case _scalablePress.SUBMIT_FOR_QUOTE_SUCCESS:return _objectSpread({},e,{isSubmittingDesign:!1});case _scalablePress.SUBMIT_FOR_QUOTE_FAILED:return _objectSpread({},e,{isSubmittingDesign:!1,error:r.payload});case _scalablePress.RETRIEVE_ORDER_STATUS_START:return _objectSpread({},e,{isRetrievingDesign:!0});case _scalablePress.RETRIEVE_ORDER_STATUS_SUCCESS:return _objectSpread({},e,{isRetrievingDesign:!1});case _scalablePress.RETRIEVE_ORDER_STATUS_FAILED:return _objectSpread({},e,{isRetrievingDesign:!1,error:r.payload})}}