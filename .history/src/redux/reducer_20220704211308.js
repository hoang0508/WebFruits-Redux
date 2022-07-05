import { combineReducers } from "@reduxjs/toolkit";
import countSlice from "./count/countSlice";
import productSlice from "./products/productSlice";
import userSlice from "./users/userSlice";

const reducer = combineReducers({
  products: productSlice,
  users: userSlice,
  count: countSlice,
});

export default reducer;
