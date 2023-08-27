import { shirt1 } from "@/assets";
import Image from "next/image";
import React from "react";

const Recommendations = () => {
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <ul className="grid gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-4">
          <li className="border border-teal-500 rounded-lg">
            <a href="/product-details" className="block overflow-hidden group">
              <Image
                src={shirt1}
                alt=""
                className="h-[250px] w-full object-cover transition duration-500 rounded-lg group-hover:scale-105"
              />

              <div className="relative pt-3 bg-teal-100 p-2 rounded-lg">
                <h3 className="text-xs text-teal-700">Tiger Pattern Shirt</h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-balck font-bold">
                    {" "}
                    £24.00 GBP{" "}
                  </span>
                </p>
              </div>
            </a>
          </li>

          <li className="border border-teal-500 rounded-lg">
            <a href="/product-details" className="block overflow-hidden group">
              <Image
                src={shirt1}
                alt=""
                className="h-[250px] w-full object-cover transition duration-500 rounded-lg group-hover:scale-105"
              />

              <div className="relative pt-3 bg-teal-100 p-2 rounded-lg">
                <h3 className="text-xs text-teal-700">Tiger Pattern Shirt</h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-balck font-bold">
                    {" "}
                    £24.00 GBP{" "}
                  </span>
                </p>
              </div>
            </a>
          </li>

          <li className="border border-teal-500 rounded-lg">
            <a href="/product-details" className="block overflow-hidden group">
              <Image
                src={shirt1}
                alt=""
                className="h-[250px] w-full object-cover transition duration-500 rounded-lg group-hover:scale-105"
              />

              <div className="relative pt-3 bg-teal-100 p-2 rounded-lg">
                <h3 className="text-xs text-teal-700">Tiger Pattern Shirt</h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-balck font-bold">
                    {" "}
                    £24.00 GBP{" "}
                  </span>
                </p>
              </div>
            </a>
          </li>

          <li className="border border-teal-500 rounded-lg">
            <a href="/product-details" className="block overflow-hidden group">
              <Image
                src={shirt1}
                alt=""
                className="h-[250px] w-full object-cover transition duration-500 rounded-lg group-hover:scale-105"
              />

              <div className="relative pt-3 bg-teal-100 p-2 rounded-lg">
                <h3 className="text-xs text-teal-700">Tiger Pattern Shirt</h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-balck font-bold">
                    {" "}
                    £24.00 GBP{" "}
                  </span>
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Recommendations;
