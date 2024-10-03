/**
 * Title: Write a program using JavaScript on PurchaseSlice
 * Author: rkrealizt
 * GitHub: https://github.com/rkrealizt
 * Telegram: rk.realizt
 * Date: 20, January 2024
 */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  purchases: [],
};

const purchaseSlice = createSlice({
  name: "purchase",
  initialState,
  reducers: {
    setPurchases: (state, action) => {
      state.purchases = action.payload;
    },
  },
});

export const { setPurchases } = purchaseSlice.actions;
export default purchaseSlice.reducer;
