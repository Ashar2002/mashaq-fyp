import { shirt1 } from "@/assets";
import Image from "next/image";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useState } from "react";
import Recommendations from "./Recommendations";

const Product = () => {
  const [quantity, setQuantity] = useState(0);

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  return (
    <>
      <div className="container mx-auto flex justify-evenly gap-4 px-2 lg:flex-nowrap flex-wrap items-center py-16">
        <div className="max-w-[600px] mx-auto w-full">
          <Image
            className="p-2 border border-brown-0 w-full rounded-xl"
            src={shirt1}
            alt="shirt"
            width={600}
            height={600}
          />
        </div>
        <div className="max-w-[700px] w-full p-2 rounded-xl">
          <h1 className="py-1 text-base font-bold uppercase text-brown-0">
            Men's Shirt
          </h1>
          <h1 className="py-4 text-4xl font-bold">Tiger Print Shirt</h1>
          <p className="py-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras leo
            ex, pretium nec lacus id, pretium pretium justo. Fusce mattis, massa
            interdum rhoncus congue, mauris massa ornare risus, id placerat
            metus nibh vitae lectus. In luctus non diam eu semper. Nunc feugiat
            risus malesuada velit tristique facilisis. Nunc et efficitur enim.
            Sed at
          </p>

          <p className="text-2xl py-2 font-bold">$50</p>

          <div className="flex items-center flex-wrap justify-left gap-5">
            <div className="quantity-container py-1 w-full bg-bisque-0 rounded-lg flex items-center justify-between px-6 lg:px-3 font-bold sm:mr-3 lg:mr-5 max-w-[200px]">
              <button
                className="text-lightborder-brown-0 text-2xl leading-none font-bold mb-1 lg:mb-2 lg:text-3xl hover:opacity-60"
                onClick={handleDecrease}
              >
                -
              </button>
              <input
                min="0"
                max="100"
                className="quantity focus:outline-none text-dark-blue bg-bisque-0 font-bold flex text-center w-full"
                type="number"
                name="quantity"
                aria-label="quantity number"
                value={quantity}
                readOnly
              />
              <button
                className="text-lightborder-brown-0 text-2xl leading-none font-bold mb-1 lg:mb-2 lg:text-3xl hover:opacity-60"
                onClick={handleIncrease}
              >
                +
              </button>
            </div>

            <button className="bg-white hover:text-white px-4 py-2 rounded-md flex items-center gap-4 group hover:bg-brown-0 border-2 border-brown-0 hover:border-brown-0">
              <FaShoppingCart className="group-hover:text-bisque-0 text-2xl cursor-pointer text-brown-0" />
              <span className="group-hover:text-bisque-0 text-brown-0 font-medium">Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
      <Recommendations />
    </>
  );
};

export default Product;
