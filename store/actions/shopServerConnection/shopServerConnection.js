import { axiosWithAuth } from '../../../utils/axiosWithAuth';

export const SAVE_STORE_ATTEMPT = 'SAVE_STORE_ATTEMPT';
export const SAVE_STORE_SUCCESS = 'SAVE_STORE_SUCCESS';
export const SAVE_STORE_FAIL = 'SAVE_STORE_FAIL';

export const saveStore = data => async dispatch => {
  dispatch({ type: SAVE_STORE_ATTEMPT });

  try {
    const pageData = storeSanitizer(data);
    console.log(pageData);

    const res = await axiosWithAuth().post('/store', pageData);
    dispatch({ type: SAVE_STORE_SUCCESS, values: res.data });
  } catch (err) {
    console.warn(err);
    dispatch({ type: SAVE_STORE_FAIL });
  }
};

function storeSanitizer(data) {
  const { storeName, layout, content } = data.Page;

  if (!layout.length > 0 || !content.length > 0) {
    return {
      store: {
        store_name: storeName
      }
    };
  } else {
    return {
      store: {
        store_name: storeName
      },
      page: {
        theme: content,
        layout: layout,
        color: ''
      }
    };
  }
}
