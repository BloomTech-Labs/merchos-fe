import { axiosWithAuth } from "../../../utils/axiosWithAuth";

import { toastController } from "../userInterface/toastActions";

export const SAVE_STORE_ATTEMPT = "SAVE_STORE_ATTEMPT";
export const SAVE_STORE_SUCCESS = "SAVE_STORE_SUCCESS";
export const SAVE_STORE_FAIL = "SAVE_STORE_FAIL";

export const saveStore = (data) => async (dispatch) => {
  dispatch({ type: SAVE_STORE_ATTEMPT });

  try {
    const pageData = storeSanitizer(data);

    const res = await axiosWithAuth().post("/store", pageData);
    dispatch({ type: SAVE_STORE_SUCCESS, values: res.data });
    dispatch(toastController("storeSaved"));
  } catch (err) {
    dispatch({ type: SAVE_STORE_FAIL, payload: err.response.data.message });
  }
};

function storeSanitizer(data) {
  const { storeName, storeUrl, Page } = data;
  const { layout, content } = Page;

  if (!layout.length > 0 || !content.length > 0) {
    return {
      store: {
        store_name: storeName,
        store_url: storeUrl
      }
    };
  } else {
    return {
      store: {
        store_name: storeName,
        store_url: storeUrl
      },
      page: {
        layout: layout,
        content: content
      }
    };
  }
}
