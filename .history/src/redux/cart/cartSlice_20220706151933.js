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
    setCartDataId: (state, action) => ({
      ...state,
      cartData: action.payload,
    }),
    setCartDataFilter: (state, action) => ({
      ...state,
      cartData: state.cartData.filter((data) => data.id !== action.payload),
    }),
    getCartData() {},
  },
});

export const { setCartData, getCartData, setCartDataId } = cartSlice.actions;

export default cartSlice.reducer;
