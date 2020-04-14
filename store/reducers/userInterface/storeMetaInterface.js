import {
  OPEN_META_EDITOR,
  CLOSE_META_EDITOR,
} from '../../actions/userInterface/storeMetaInterface'

const initialState = {
  interfaceActive: false,
}

export const storeMetaInterface = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_META_EDITOR:
      return {
        ...state,
        interfaceActive: true
      }
    case CLOSE_META_EDITOR:
      return {
        ...state,
        interfaceActive: false
      }
    default:
      return state
  }
}
