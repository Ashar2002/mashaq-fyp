import { men, women } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutUs = () => {
  return (
    <>
      <section>
        <div className="mx-auto container px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="bg-lightbrown-0 p-8 md:p-12 lg:px-16 flex items-center">
              <div className="mx-auto max-w-xl text-center">
                <h2 className="text-2xl font-bold text-white md:text-3xl">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit
                </h2>

                <p className="hidden text-white/90 sm:mt-4 sm:block">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
                  egestas tempus tellus etiam sed. Quam a scelerisque amet
                  ullamcorper eu enim et fermentum, augue. Aliquet amet volutpat
                  quisque ut interdum tincidunt duis.
                </p>

                <div className="mt-4 md:mt-8">
                  <a
                    href="#"
                    className="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-brown-0 transition hover:bg-transparent hover:text-white focus:outline-none focus:ring focus:ring-yellow-400"
                  >
                    Shop now
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
              <div className="w-full h-full relative group">
                <Link href="#" className="absolute w-full h-full bg-brown-0/60 hidden group-hover:flex items-center justify-center">
                  <span className="text-bisque-0 text-3xl">
                    Womens
                  </span>
                </Link>
                <Image
                  alt="Student"
                  src={women}
                  width={400}
                  height={400}
                  className="h-40 w-full object-cover sm:h-56 md:h-full"
                />
              </div>
              <div className="w-full h-full relative group">
                <Link href="#" className="absolute w-full h-full bg-brown-0/60 hidden group-hover:flex items-center justify-center">
                  <span className="text-bisque-0 text-3xl" >
                    Mens
                  </span>
                </Link>
                <Image
                  alt="Student"
                  src={men}
                  width={400}
                  height={400}
                  className="h-40 w-full object-cover sm:h-56 md:h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
