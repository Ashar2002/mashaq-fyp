import { gitIcon2 } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-brown-0 py-16">
      <div className="max-w-[420px] mx-auto px-4">
        <ul className="flex justify-between text-white">
          <li>Home</li>
          <li>Products</li>
          <li>Blog</li>
          <li>Contact Us</li>
        </ul>
        <div className="my-4 w-full flex justify-center items-center">
          <Link href="#">
            <Image
              src={gitIcon2}
              className="mx-auto"
              alt="gitIcon2"
              width={50}
              height={50}
            />
          </Link>
        </div>
        <p className="text-white text-sm text-center">Copyright © 2023 - All right reserved by Mashaq FYP group</p>
      </div>
    </div>
  );
};

export default Footer;
