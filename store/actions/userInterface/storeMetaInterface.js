export const OPEN_META_EDITOR = 'OPEN_META_EDITOR'
export const CLOSE_META_EDITOR = 'CLOSE_META_EDITOR'

export const openStoreMetaEditor = () => (dispatch) => {
  dispatch({ type: OPEN_META_EDITOR })
}

export const closeStoreMetaEditor = () => (dispatch) => {
  dispatch({ type: CLOSE_META_EDITOR })
}
