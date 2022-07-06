import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "carts",
  initialState: {
    cartData: [],
  },
  reducers: {
    setCartData: (state, action) => ({
      ...state,
      cartData: action.payload,
    }),
    getCartData() {},
  },
});

export const { setCartData, getCartData } = cartSlice.actions;

export default cartSlice.reducer;
