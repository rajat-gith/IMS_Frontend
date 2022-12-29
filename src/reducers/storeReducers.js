import {
  STORE_LIST_FAIL,
  STORE_LIST_REQUEST,
  STORE_LIST_SUCCESS,
  STORE_OWNER_LIST_FAIL,
  STORE_OWNER_LIST_REQUEST,
  STORE_OWNER_LIST_SUCCESS,
} from "../constants/storeConstants";

export const storeListReducers = (state = { stores: [] }, action) => {
  switch (action.type) {
    case STORE_LIST_REQUEST:
      return { loading: true, stores: [] };
    case STORE_LIST_SUCCESS:
      return { loading: false, stores: action.payload };
    case STORE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const storeOwnerListReducers = (state = { storeOwners: {} }, action) => {
  switch (action.type) {
    case STORE_OWNER_LIST_REQUEST:
      return { loading: true, storeOwners: {} };
    case STORE_OWNER_LIST_SUCCESS:
      return { loading: false, storeOwners: action.payload };
    case STORE_OWNER_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
