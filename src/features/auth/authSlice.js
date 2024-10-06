/**
 * Title: Write a program using JavaScript on AuthSlice
 * Author: rkrealizt
 * Portfolio: https://bento.me/rkrealizt
 * GitHub: https://github.com/rkrealizt
 * Date: 12, November 2023
 */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    addUser: (state, { payload }) => {
      state.user = payload;
    },
  },
});

export const { addUser } = authSlice.actions;
export default authSlice.reducer;
