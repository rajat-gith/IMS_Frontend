import axios from "axios";
import {
  STORE_LIST_FAIL,
  STORE_LIST_REQUEST,
  STORE_LIST_SUCCESS,
  STORE_OWNER_LIST_FAIL,
  STORE_OWNER_LIST_REQUEST,
  STORE_OWNER_LIST_SUCCESS,
} from "../constants/storeConstants";

export const listStores =
  (keyword = "") =>
  async (dispatch) => {
    try {
      dispatch({ type: STORE_LIST_REQUEST });
      const { data } = await axios.get(`/api/stores/${keyword}`);
      dispatch({
        type: STORE_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: STORE_LIST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const listStoreOwners = () => async (dispatch) => {
  try {
    dispatch({ type: STORE_OWNER_LIST_REQUEST });
    const { data } = await axios.get(`/api/owners`);

    dispatch({
      type: STORE_OWNER_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: STORE_OWNER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
