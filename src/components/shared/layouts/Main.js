/**
 * Title: Write a program using JavaScript on Main
 * Author: rkrealizt
 * GitHub: https://github.com/rkrealizt
 * Telegram: rk.realizt
 * Date: 22, October 2023
 */

import React from "react";
import Header from "../header/Header";
import Footer from "../Footer";

const Main = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Main;
