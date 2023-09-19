import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const BannerContent = () => {
  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-white md:text-5xl text-2xl">
          Welcome to Movie Bazaaaaaaaaar !
        </h1>

        <p className="mb-3 text-white dark:text-gray-400 pt-3 md:text-lg text-sm">
          Enjoy your favourite movie in here without charging any fee.
          <br /> This is new build web platform to get update arraivals,
          launced, old movies
        </p>

        <HashLink
          to="#movies"
          className="bg-white sm:p-4 p-2 rounded-full hover:mt-4 ease-in-out duration-300"
        >
          <svg
            className="w-6 h-6 text-gray-800 dark:text-black"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1v12m0 0 4-4m-4 4L1 9"
            />
          </svg>
        </HashLink>
      </div>
    </div>
  );
};

export default BannerContent;
