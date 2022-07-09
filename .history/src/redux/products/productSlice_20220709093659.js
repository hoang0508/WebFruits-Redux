import { createSlice } from "@reduxjs/toolkit";
import { productMaxPrice } from "utils/contains";

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
    }),
    setDataDetails: (state, action) => ({
      ...state,
      dataDetails: action.payload,
    }),
    setDataFilter: (state, action) => ({
      ...state,
      data: state.data.filter((item) => item.id !== action.payload),
    }),
    setDataStatus: (state, action) => ({
      ...state,
      data: state.data.filter((item) => item.status === action.payload),
    }),
    setDataFilterPrice: (state, action) => ({
      ...state,
      data: state.data.filter(
        (item) =>
          action.payload < Number(item.priceNew) &&
          Number(item.priceNew) < productMaxPrice.PRODUCT_80
      ),
    }),
    setLoading: (state, action) => ({
      ...state,
      loading: action.payload,
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
  setLoading,
  setDataFilterPrice,
} = productSlice.actions;

export default productSlice.reducer;
