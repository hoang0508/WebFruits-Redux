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
      data: state.data.filter((item) => {
        let result;
        switch (action.payload) {
          case action.payload === 30:
            result = productMaxPrice.PRODUCT_45;
            break;
          case action.payload === 50:
            result = productMaxPrice.PRODUCT_80;
            break;
          case action.payload === 80:
            result = productMaxPrice.PRODUCT_45;
            break;
          case action.payload === 100:
            result = productMaxPrice.PRODUCT_45;
            break;
          default:
            result = 30;
            break;
        }
        return (
          action.payload < Number(item.priceNew) &&
          Number(item.priceNew) < result
        );
      }),
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
