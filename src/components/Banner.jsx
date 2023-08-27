import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-16 flex flex-col gap-5 h-[70vh] bg-[#000] banner bg-cover bg-center bg-no-repeat items-center justify-center">
        <h1 className="uppercase lg:text-6xl sm:text-4xl text-white text-3xl font-bold text-center">
          Welcome to <span className="text-teal-500">My Shop</span>
        </h1>
        <button className="bg-teal-500 hover:bg-white font-medium hover:scale-105 hover:text-teal-600 ease-in-out delay-100 transition-all text-white px-10 py-3 mt-5 rounded-md w-fit mx-auto capitalize outline-none">
          get started
        </button>
      </div>
    </>
  );
};

export default Banner;
