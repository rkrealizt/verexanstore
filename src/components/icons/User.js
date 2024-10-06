/**
 * Title: Write a program using JavaScript on User
 * Author: rkrealizt
 * Portfolio: https://bento.me/rkrealizt
 * GitHub: https://github.com/rkrealizt
 * Date: 17, October 2023
 */

import React from "react";

const User = ({ className, ...props }) => {
  return (
    <svg
      {...props}
      className={"w-4 h-4" + (className ? " " + className : "")}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export default User;
