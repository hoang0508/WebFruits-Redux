import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "carts",
  initialState: {
    cartData: [],
    cartDataId: [],
  },
  reducers: {
    setCartData: (state, action) => ({
      ...state,
      cartData: action.payload,
    }),
    setCartDataId: (state, action) => ({
      ...state,
      cartDataId: action.payload,
    }),
    getCartData() {},
  },
});

export const { setCartData, getCartData } = cartSlice.actions;

export default cartSlice.reducer;
