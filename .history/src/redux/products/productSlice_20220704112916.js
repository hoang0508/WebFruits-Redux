import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    dataDetails: [],
  },
  reducers: {
    setData: (state, action) => ({
      ...state,
      data: action.payload,
    }),
    setDataDetails: (state, action) => ({
      ...state,
      dataDetails: action.payload,
    }),
    getData() {},
    getDataId() {},
  },
});

export const { setData, getData, setDataDetails } = productSlice.actions;

export default productSlice.reducer;
