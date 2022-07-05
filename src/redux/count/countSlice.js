import { createSlice } from "@reduxjs/toolkit";

const countSlice = createSlice({
  name: "count",
  initialState: {
    count: 1,
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
  },
});

export const { setCountDecrement, setCountIncrement } = countSlice.actions;

export default countSlice.reducer;
