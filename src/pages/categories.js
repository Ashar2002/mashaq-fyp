import { shirt1, shirt2, shirt3, shirt4 } from "@/assets";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InnerBanner from "@/components/InnerBanner";
import Sidebar from "@/components/SideBar";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const categories = () => {
  return (
    <>
      <Sidebar />
      <div>
        <InnerBanner />
        <div className="container mx-auto">
          <div className="grid place-items-center h-full place-content-center w-full xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 py-16 justify-between items-start gap-2">
            <Link href="/product-details" className="border border-teal-500 rounded-lg pt-3 my-2 mb-3 gap-3">
              <Image
                src={shirt1}
                alt="shirt1"
                className="h-[270px] object-cover"
                width={300}
                height={300}
              />
              <div className="bg-teal-200 w-full p-2 rounded-lg rounded-t-none h-full">
                <p className="text-gray-500 text-lg">Dummy Shirt</p>
                <p className="text-black font-bold">$ 9.99</p>
              </div>
            </Link>
            <Link href="/product-details" className="border border-teal-500 rounded-lg pt-3 my-2 mb-3 gap-3">
              <Image
                src={shirt4}
                alt="shirt1"
                className="h-[270px] object-cover"
                width={300}
                height={300}
              />
              <div className="bg-teal-200 w-full p-2 rounded-lg rounded-t-none h-full">
                <p className="text-gray-500 text-lg">Dummy Shirt</p>
                <p className="text-black font-bold">$ 9.99</p>
              </div>
            </Link>
            <Link href="/product-details" className="border border-teal-500 rounded-lg pt-3 my-2 mb-3 gap-3">
              <Image
                src={shirt1}
                alt="shirt1"
                className="h-[270px] object-cover"
                width={300}
                height={300}
              />
              <div className="bg-teal-200 w-full p-2 rounded-lg rounded-t-none h-full">
                <p className="text-gray-500 text-lg">Dummy Shirt</p>
                <p className="text-black font-bold">$ 9.99</p>
              </div>
            </Link>
            <Link href="/product-details" className="border border-teal-500 rounded-lg pt-3 my-2 mb-3 gap-3">
              <Image
                src={shirt4}
                alt="shirt1"
                className="h-[270px] object-cover"
                width={300}
                height={300}
              />
              <div className="bg-teal-200 w-full p-2 rounded-lg rounded-t-none h-full">
                <p className="text-gray-500 text-lg">Dummy Shirt</p>
                <p className="text-black font-bold">$ 9.99</p>
              </div>
            </Link>
            <Link href="/product-details" className="border border-teal-500 rounded-lg pt-3 my-2 mb-3 gap-3">
              <Image
                src={shirt1}
                alt="shirt1"
                className="h-[270px] object-cover"
                width={300}
                height={300}
              />
              <div className="bg-teal-200 w-full p-2 rounded-lg rounded-t-none h-full">
                <p className="text-gray-500 text-lg">Dummy Shirt</p>
                <p className="text-black font-bold">$ 9.99</p>
              </div>
            </Link>
            <Link href="/product-details" className="border border-teal-500 rounded-lg pt-3 my-2 mb-3 gap-3">
              <Image
                src={shirt4}
                alt="shirt1"
                className="h-[270px] object-cover"
                width={300}
                height={300}
              />
              <div className="bg-teal-200 w-full p-2 rounded-lg rounded-t-none h-full">
                <p className="text-gray-500 text-lg">Dummy Shirt</p>
                <p className="text-black font-bold">$ 9.99</p>
              </div>
            </Link>
            <Link href="/product-details" className="border border-teal-500 rounded-lg pt-3 my-2 mb-3 gap-3">
              <Image
                src={shirt1}
                alt="shirt1"
                className="h-[270px] object-cover"
                width={300}
                height={300}
              />
              <div className="bg-teal-200 w-full p-2 rounded-lg rounded-t-none h-full">
                <p className="text-gray-500 text-lg">Dummy Shirt</p>
                <p className="text-black font-bold">$ 9.99</p>
              </div>
            </Link>
            <Link href="/product-details" className="border border-teal-500 rounded-lg pt-3 my-2 mb-3 gap-3">
              <Image
                src={shirt4}
                alt="shirt1"
                className="h-[270px] object-cover"
                width={300}
                height={300}
              />
              <div className="bg-teal-200 w-full p-2 rounded-lg rounded-t-none h-full">
                <p className="text-gray-500 text-lg">Dummy Shirt</p>
                <p className="text-black font-bold">$ 9.99</p>
              </div>
            </Link>
            <Link href="/product-details" className="border border-teal-500 rounded-lg pt-3 my-2 mb-3 gap-3">
              <Image
                src={shirt1}
                alt="shirt1"
                className="h-[270px] object-cover"
                width={300}
                height={300}
              />
              <div className="bg-teal-200 w-full p-2 rounded-lg rounded-t-none h-full">
                <p className="text-gray-500 text-lg">Dummy Shirt</p>
                <p className="text-black font-bold">$ 9.99</p>
              </div>
            </Link>
            <Link href="/product-details" className="border border-teal-500 rounded-lg pt-3 my-2 mb-3 gap-3">
              <Image
                src={shirt4}
                alt="shirt1"
                className="h-[270px] object-cover"
                width={300}
                height={300}
              />
              <div className="bg-teal-200 w-full p-2 rounded-lg rounded-t-none h-full">
                <p className="text-gray-500 text-lg">Dummy Shirt</p>
                <p className="text-black font-bold">$ 9.99</p>
              </div>
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default categories;
