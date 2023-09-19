import React, { useState } from "react";
import useMovies from "../../Hooks/useMovies";
import MainContents from "../MainContents/MainContents";

const SearchBar = () => {
  const [inputText, setInputeText] = useState("");

  return (
    <>
      <div className="container">
        <div className="bg-white px-3 sm:px-5 py-20 my-10 border">
          <div className="w-100">
            <h1 className="text-3xl mb-6 text-xl md:text-3xl uppercase">
              Search here to see your fvourite movie
            </h1>
            <form className="flex">
              <input
                className="text-lg bg-gray-50 outline-none border border-gray-300 text-gray-900 text-sm rounded-bl-sm focus:border-black block w-9/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                type="text"
                name="search"
                placeholder="Enter Movie.."
                required
                onChange={(e) => setInputeText(e.target.value)}
              />
              <button
                type="button"
                className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-r-sm font-medium w-3/12 h-full text-sm sm:px-5 px-3 py-4  p-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 text-lg"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
      <MainContents inputText={inputText} />
    </>
  );
};

export default SearchBar;
