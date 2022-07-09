import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    dataDetails: [],
    loading: true,
  },
  reducers: {
    setData: (state, action) => ({
      ...state,
      data: action.payload,
      loading: false,
    }),
    setDataDetails: (state, action) => ({
      ...state,
      dataDetails: action.payload,
      loading: state.loading === false,
    }),
    setDataFilter: (state, action) => ({
      ...state,
      data: state.data.filter((item) => item.id !== action.payload),
      loading: false,
    }),
    setDataStatus: (state, action) => ({
      ...state,
      data: state.data.filter((item) => item.status === action.payload),
      loading: state.loading === false,
    }),
    getData() {},
  },
});

export const {
  setData,
  getData,
  setDataDetails,
  getDataId,
  setDataFilter,
  setDataStatus,
} = productSlice.actions;

export default productSlice.reducer;
