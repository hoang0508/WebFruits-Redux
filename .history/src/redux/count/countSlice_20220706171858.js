import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "count",
  initialState: {
    count: 0,
  },
  reducers: {
    setCountIncrement: (state, action) => ({
      ...state,
      count: state.count + 1,
    }),
    setCountDecrement: (state, action) => ({
      ...state,
      count: state.count - 1,
    }),
    setValueDecrement: (state, action) => ({
      ...state,
      count: state.count + action.payload - 1,
    }),
    setValueIncrement: (state, action) => ({
      ...state,
      count: state.count + action.payload + 1,
    }),
  },
});

export const {
  setCountDecrement,
  setCountIncrement,
  setValueDecrement,
  setValueIncrement,
} = countSlice.actions;

export default countSlice.reducer;
