/**
 * Title: Write a program using JavaScript on Unauthorized
 * Author: rkrealizt
 * GitHub: https://github.com/rkrealizt
 * Telegram: rk.realizt
 * Date: 20, November 2023
 */

import Image from "next/image";
import Link from "next/link";
import React from "react";

const Unauthorized = () => {
  return (
    <section className="fixed top-0 left-0 h-screen w-screen overflow-hidden flex justify-center items-center bg-white z-50">
      <div className="text-center flex flex-col gap-y-4">
        <h1 className="md:text-5xl text-3xl">Unauthorized</h1>
        <h2 className="md:text-3xl text-xl font-mono">
          You are not authorized to access this page
        </h2>
        <Link href="/">
          <button className="px-8 py-4 border border-black rounded-secondary bg-black hover:bg-black/90 text-white transition-colors drop-shadow w-fit mt-4">
            Home
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Unauthorized;
