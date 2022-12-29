import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  composeWithDevTools,
  createwithDevTools,
} from "redux-devtools-extension";
import {
  productListReducers,
  productCreateReducer,
} from "./reducers/productReducers";
import {
  storeListReducers,
  storeOwnerListReducers,
} from "./reducers/storeReducers";
import {
  userLoginReducers,
  userRegisterReducers,
  userDetailsReducers,
  userUpdateProfileReducers,
} from "./reducers/userReducers";

const reducer = combineReducers({
  productList: productListReducers,
  storeList: storeListReducers,
  userLogin: userLoginReducers,
  userRegister: userRegisterReducers,
  userUpdateProfile: userUpdateProfileReducers,
  productCreate: productCreateReducer,
  storeOwnerList: storeOwnerListReducers,
});
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
