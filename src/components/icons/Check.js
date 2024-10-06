/**
 * Title: Write a program using JavaScript on Check
 * Author: rkrealizt
 * Portfolio: https://bento.me/rkrealizt
 * GitHub: https://github.com/rkrealizt
 * Date: 20, January 2024
 */

import React from "react";

const Check = (props) => {
  return (
    <svg
    {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 12.75 6 6 9-13.5"
      />
    </svg>
  );
};

export default Check;
