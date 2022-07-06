import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./cart/cartSlice";
import countSlice from "./count/countSlice";
import productSlice from "./products/productSlice";
import userSlice from "./users/userSlice";

const reducer = combineReducers({
  products: productSlice,
  users: userSlice,
  count: countSlice,
  carts: cartSlice,
});

export default reducer;
