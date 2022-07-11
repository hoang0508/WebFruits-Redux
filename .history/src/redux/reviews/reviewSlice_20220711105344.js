import { createSlice } from "@reduxjs/toolkit";

const reviewSlice = createSlice({
  name: "reviews",
  initialState: {
    dataReview: [],
  },
  reducers: {
    setDataReview: (state, action) => ({
      ...state,
      dataReview: action.payload,
    }),
    getDataReview() {},
  },
});

export const { setDataReview } = reviewSlice.actions;

export default reviewSlice.reducer;
