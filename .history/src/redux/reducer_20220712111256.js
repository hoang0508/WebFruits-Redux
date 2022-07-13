import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./cart/cartSlice";
import countSlice from "./count/countSlice";
import likeSlice from "./likes/likeSlice";
import productSlice from "./products/productSlice";
import reviewSlice from "./reviews/reviewSlice";
import userSlice from "./users/userSlice";

const reducer = combineReducers({
  products: productSlice,
  users: userSlice,
  count: countSlice,
  carts: cartSlice,
  reviews: reviewSlice,
  likes: likeSlice,
});

export default reducer;
