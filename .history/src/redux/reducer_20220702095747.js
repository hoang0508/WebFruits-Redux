import { combineReducers } from "@reduxjs/toolkit";
import productSlice from "./products/productSlice";

const reducer = combineReducers({
  products: productSlice,
});

export default reducer;
