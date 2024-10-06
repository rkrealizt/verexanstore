/**
 * Title: Write a program using JavaScript on PaymentApi
 * Author: rkrealizt
 * Portfolio: https://bento.me/rkrealizt
 * GitHub: https://github.com/rkrealizt
 * Date: 19, January 2024
 */

const { canimApi } = require("../canim");

const paymentApi = canimApi.injectEndpoints({
  endpoints: (build) => ({
    // create payment
    createPayment: build.mutation({
      query: (body) => ({
        url: "/payment/create-payment",
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body,
      }),
    }),
  }),
});

export const { useCreatePaymentMutation } = paymentApi;
