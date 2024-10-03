/**
 * Title: Write a program using JavaScript on FavoriteSlice
 * Author: rkrealizt
 * GitHub: https://github.com/rkrealizt
 * Telegram: rk.realizt
 * Date: 20, January 2024
 */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    setFavorites: (state, action) => {
      state.favorites = action.payload;
    },
  },
});

export const { setFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;
