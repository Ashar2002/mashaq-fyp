import Image from "next/image";
import React from "react";

const Search = () => {
  return (
    <>
      <div>
        <form class="py-10">
          <div class="md:flex-row flex max-w-[900px] px-4 w-full mx-auto">
            <div class="inline-flex flex-auto">
              <button
                type="submit"
                class="py-2.5 px-3.5 text-sm rounded-t-md md:rounded-tr-none md:rounded-l-md font-medium leading-snug tracking-wider uppercase text-gray-900 bg-brown-0 transition hover:bg-bisque-0 active:bg-bisque-0 on:bg-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="xt-icon text-xl -my-1"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>

              <input
                type="text"
                class="block w-full py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
                aria-label="Search"
                placeholder="Seach Catalog"
              />
            </div>

            <button
              type="submit"
              class="xt-button py-2.5 px-3.5 text-sm rounded-b-md md:rounded-bl-none md:rounded-r-md font-medium leading-snug tracking-wider uppercase text-white transition hover:bg-blue-600 bg-brown-0"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Search;
