import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { urlFor } from "@/pages";
import Link from "next/link";

const Search = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const searchRef = useRef(null);

  // Function to handle input change
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchTerm(inputValue);

    // Filter the data based on the input value
    const filteredResults = products.filter((item) =>
      item.title.toLowerCase().includes(inputValue.toLowerCase())
    );

    setResults(filteredResults);
  };

  // Function to clear the input and results
  const clearInput = () => {
    setSearchTerm("");
    setResults([]);
  };

  // Function to close the dropdown when clicking outside
  const handleClickOutside = (e) => {
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      clearInput();
    }
  };

  useEffect(() => {
    // Add a click event listener to the document body
    document.body.addEventListener("click", handleClickOutside);

    // Cleanup the event listener on unmount
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <form
        className="py-10 relative max-w-[900px] w-full mx-auto"
        ref={searchRef}
      >
        <div className="md:flex-row flex mx-auto border border-brown-0 rounded-md relative">
          <div className="inline-flex flex-auto border rounded-l-md">
            <input
              type="text"
              className="block w-full py-2.5 px-3.5 text-gray-900 placeholder-black placeholder-opacity-75 bg-gray-100 transition focus:bg-gray-200 focus:outline-none"
              aria-label="Search"
              placeholder="Search Catalog"
              value={searchTerm}
              onChange={handleInputChange}
            />
          </div>

          <button
            type="submit"
            disabled
            className="xt-button py-2.5 px-3.5 text-sm rounded-b-md md:rounded-bl-none md:rounded-r-md font-medium leading-snug tracking-wider uppercase text-white transition hover:bg-lightbrown-0 bg-brown-0"
          >
            Search
          </button>
        </div>

        {/* Dropdown to display results */}
        {results.length > 0 && (
          <div
            className={`bg-white border border-brown-0 mt-2 p-2 absolute left-0 w-full ${
              results.length > 2 ? "overflow-y-scroll h-[300px] search" : ""
            }`}
          >
            {results.map((item) => (
              <Link
                key={item.id}
                href={`/product/${item._id}`}
                className="w-full flex items-center space-x-2 border border-red-500 gap-2 mb-2"
              >
                <div className="w-full max-w-[120px] bg-bisque-0 text-center">
                  <Image
                    src={urlFor(item.image).url()}
                    alt={item.title}
                    width={100}
                    height={100}
                    className="object-cover mx-auto py-2 rounded-full"
                  />
                </div>
                <p>{item.title}</p>
              </Link>
            ))}
          </div>
        )}
      </form>
    </>
  );
};

export default Search;
