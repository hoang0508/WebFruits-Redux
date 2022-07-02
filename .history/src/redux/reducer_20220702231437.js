import { combineReducers } from "@reduxjs/toolkit";
import productSlice from "./products/productSlice";
import userSlice from "./users/userSlice";

const reducer = combineReducers({
  products: productSlice,
  users: userSlice,
});

export default reducer;
