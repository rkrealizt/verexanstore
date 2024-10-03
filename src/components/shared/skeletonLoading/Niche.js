/**
 * Title: Write a program using JavaScript on Niche
 * Author: rkrealizt
 * GitHub: https://github.com/rkrealizt
 * Telegram: rk.realizt
 * Date: 14, November 2023
 */

import React from "react";

const Niche = () => {
  return (
    <section className="border p-4 rounded-primary flex flex-col gap-y-4">
      <div className="rounded h-[50px] w-[50px] bg-gray-200 border animate-pulse" />
      <div className="flex flex-col gap-y-2">
        <div className="border rounded h-8 bg-gray-200 animate-pulse" />
        <div className="border rounded h-5 bg-gray-200 animate-pulse" />
        <div className="flex flex-row gap-x-2">
          <div className="border rounded h-3 flex-1 bg-gray-200 animate-pulse" />
          <div className="border rounded h-3 flex-1 bg-gray-200 animate-pulse" />
          <div className="border rounded h-3 flex-1 bg-gray-200 animate-pulse" />
          <div className="border rounded h-3 flex-1 bg-gray-200 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Niche;