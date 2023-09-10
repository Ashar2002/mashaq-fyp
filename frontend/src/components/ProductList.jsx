import { urlFor } from "@/pages";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductList = ({ products }) => {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid place-items-center h-full place-content-center w-full 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 py-16 justify-between items-start gap-2">
          {products?.map((item, index) => (
            <Link
              href={`/product/${item._id}`}
              className="flex flex-col items-center border border-brown-0 rounded-lg pt-3"
            >
              <Image
                // src={shirt1}
                src={urlFor(item.image).url()}
                alt="shirt1"
                width={300}
                className="h-[300px] object-cover w-full max-w-[300px]"
                height={300}
              />
              <div className="bg-bisque-0 w-full p-2 rounded-lg rounded-t-none">
                <p className="text-gray-500 text-lg">{item.title}</p>
                <p className="text-black font-bold">${item.price}.00</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
