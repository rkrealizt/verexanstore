/**
 * Title: Write a program using JavaScript on Plus
 * Author: rkrealizt
 * GitHub: https://github.com/rkrealizt
 * Telegram: rk.realizt
 * Date: 10, November 2023
 */

import React from "react";

const Plus = (props) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="w-4 h-4"
    >
      <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
    </svg>
  );
};

export default Plus;
