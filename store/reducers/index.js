import { combineReducers } from 'redux'

// reducers
import { authInterface } from './userInterface/authInterface'
import { userData } from './userData/userData'
import { shopServerConnection } from './shopServerConnection/shopServerConnection'
import workspaceReducer from './workspaceReducer'
import { toastController } from './userInterface/toastController'
import { storeMetaInterface } from './userInterface/storeMetaInterface'

import { cartCheckoutReducer } from './cartCheckout/cartCheckout'
import {scalableReducer}from './scalableConnection/scalalbleReducer'

export const rootReducer = combineReducers({
  workspace: workspaceReducer,
  shopServerConnection,
  authInterface,
  userData,
  scalableReducer,
  toastController,
  storeMetaInterface,
  cartCheckoutReducer,
})
