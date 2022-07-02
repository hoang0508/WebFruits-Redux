import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
  },
  reducers: {
    setData: (state, action) => ({
      ...state,
      data: action.payload,
    }),
    getData() {},
  },
});

export const { setData, getData } = productSlice.actions;

export default productSlice.reducer;
