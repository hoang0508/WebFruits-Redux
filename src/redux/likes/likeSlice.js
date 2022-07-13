import { createSlice } from "@reduxjs/toolkit";

const likeSlice = createSlice({
  name: "likes",
  initialState: {
    likeData: [],
  },
  reducers: {
    setLikeData: (state, action) => ({
      ...state,
      likeData: action.payload,
    }),
    getLikeData() {},
  },
});

export const { getLikeData, setLikeData } = likeSlice.actions;

export default likeSlice.reducer;
