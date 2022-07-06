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
      cartData: [...state.cartData].filter(
        (item) => item.id !== action.payload
      ),
    }),
    getCartData() {},
  },
});

export const { setCartData, getCartData, setCartDataId, setCartDataFilter } =
  cartSlice.actions;

export default cartSlice.reducer;
