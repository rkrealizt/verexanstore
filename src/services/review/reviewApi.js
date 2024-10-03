/**
 * Title: Write a program using JavaScript on ReviewApi
 * Author: rkrealizt
 * GitHub: https://github.com/rkrealizt
 * Telegram: rk.realizt
 * Date: 19, January 2024
 */

const { canimApi } = require("../canim");

const reviewApi = canimApi.injectEndpoints({
  endpoints: (builder) => ({
    // Add Review
    addReview: builder.mutation({
      query: (body) => ({
        url: "/review/add-review",
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body,
      }),

      invalidatesTags: ["Review", "Product", "User"],
    }),

    // remove review
    removeReview: builder.mutation({
      query: (id) => ({
        url: `/review/delete-review/${id}`,
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),

      invalidatesTags: ["Review", "Product", "User"],
    }),
  }),
});

export const { useAddReviewMutation, useRemoveReviewMutation } = reviewApi;
