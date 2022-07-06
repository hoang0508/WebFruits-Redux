import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "count",
  initialState: {
    count: 0,
  },
  reducers: {
    setCountIncrement: (state, action) => ({
      ...state,
      count: action ? (state.count = action.payload + 1) : state.count + 1,
    }),
    setCountDecrement: (state, action) => ({
      ...state,
      count: action ? (state.count = action.payload - 1) : state.count - 1,
    }),
    setCount() {},
  },
});

export const { setCountDecrement, setCountIncrement, setCount } =
  countSlice.actions;

export default countSlice.reducer;
