import { shirt1 } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { client } from "../../client";

const BestSelling = () => {
  const arra = [1, 2, 3, 4, 5];

  return (
    <div className="container mx-auto py-16">
      <h1 className="text-4xl text-brown-0 font-bold text-center">Best Selling Products</h1>
      <div className="flex mt-8 gap-x-2 gap-y-4 mx-1 lg:flex-nowrap flex-wrap lg:justify-between justify-center items-start">
        {arra?.map((item, index) => (
          <Link
            href="/product-details"
            className="flex flex-col items-center border border-brown-0 rounded-lg pt-3"
          >
            <Image src={shirt1} alt="shirt1" width={300} height={300} />
            <div className="bg-bisque-0 w-full p-2 rounded-lg rounded-t-none">
              <p className="text-gray-500 text-lg">Dummy Shirt</p>
              <p className="text-black font-bold">$ 9.99</p>
            </div>
          </Link> 
        ))}
      </div>
    </div>
  );
};

export default BestSelling;

// export const getServerSideProps = async () => {
//   const query = `*[_type == "product"]`;
//   const products = await client.fetch(query);

//   return {
//     props: {
//       products,
//     },
//   };
// };
