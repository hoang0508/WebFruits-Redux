import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "users",
  initialState: {
    userInfo: {},
  },
  reducers: {
    setUserInfo: (state, action) => ({
      ...state,
      userInfo: action.payload,
    }),
  },
});

export const { setUserInfo } = userSlice.actions;
export default userSlice.reducer;
