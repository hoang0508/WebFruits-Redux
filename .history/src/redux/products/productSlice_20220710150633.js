import { createSlice } from "@reduxjs/toolkit";
import { productMaxPrice, productSortPrice } from "utils/contains";

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
          case (action.payload = 30):
            result = productMaxPrice.PRODUCT_45;
            break;
          case (action.payload = 50):
            result = productMaxPrice.PRODUCT_80;
            break;
          case (action.payload = 80):
            result = productMaxPrice.PRODUCT_100;
            break;
          case (action.payload = 100):
            result = productMaxPrice.PRODUCT_150;
            break;
          default:
            result = 30;
            break;
        }
        return (
          action.payload < Number(item.priceNew) &&
          Number(item.priceNew) <= result
        );
      }),
    }),
    setDataSortPrice: (state, action) => {
      return {
        ...state,
        data: state.data.slice().sort((a, b) => {
          let result;
          let x = a.priceNew;
          let y = b.priceNew;
          if (action.payload === productSortPrice.SORT_INCREA) {
            result = x > y;
          } else {
            result = x < y;
          }
          return result ? 1 : -1;
        }),
      };
    },
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
  setDataSortPrice,
} = productSlice.actions;

export default productSlice.reducer;
