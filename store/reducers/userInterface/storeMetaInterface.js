import {
  OPEN_META_EDITOR,
  CLOSE_META_EDITOR,
} from '../../actions/userInterface/storeMetaInterface'

import {
  SAVE_STORE_ATTEMPT,
  SAVE_STORE_SUCCESS,
  SAVE_STORE_FAIL,
} from '../../actions/shopServerConnection/shopServerConnection'

const initialState = {
  interfaceActive: false,
  loading: false,
  errors: '',
}

export const storeMetaInterface = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_META_EDITOR:
      return {
        ...state,
        interfaceActive: true,
      }
    case CLOSE_META_EDITOR:
      return initialState

    case SAVE_STORE_ATTEMPT:
      return {
        ...state,
        loading: true,
        errors: '',
      }
    case SAVE_STORE_SUCCESS:
      return {
        ...state,
        loading: false,
        errors: '',
        interfaceActive: false
      }
    case SAVE_STORE_FAIL:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      }
    default:
      return state
  }
}
