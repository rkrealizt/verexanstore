/**
 * Title: Write a program using JavaScript on Canim
 * Author: rkrealizt
 * Portfolio: https://bento.me/rkrealizt
 * GitHub: https://github.com/rkrealizt
 * Date: 09, November 2023
 */

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const canimApi = createApi({
  reducerPath: "canimApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BASE_URL}`,
  }),
  tagTypes: [
    "User",
    "Product",
    "Brand",
    "Category",
    "Store",
    "Cart",
    "Favorite",
    "Purchase",
    "Review",
  ],
  endpoints: () => ({}),
});
