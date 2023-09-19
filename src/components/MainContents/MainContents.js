import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";

const MainContents = (props) => {
  const [movies, setMovies] = useState([]);
  const [isloading, setIsloading] = useState(false);
  const [count, setCount] = useState({ startCount: 0, endCount: 10 });

  useEffect(() => {
    setIsloading(true);
    if (props.inputText === undefined || props.inputText === "") {
      return;
    }
    const url = `https://api.themoviedb.org/3/search/movie?query=${props.inputText}&api_key=87faa7fd1ab72d14a51ce99165c01511`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4N2ZhYTdmZDFhYjcyZDE0YTUxY2U5OTE2NWMwMTUxMSIsInN1YiI6IjY1MDhiZGFlM2NkMTJjMDBhZDhjMGU1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.LKkL8rwwnCVMfsdZEw1WrdEh_Zs9cbsSuu1LqiQ7DWM",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setIsloading(false);
        setMovies(json.results);
      })
      .catch((err) => console.error("error:" + err));
  }, [props.inputText]);

  const handlePagination = (e) => {
    if (e.target.innerText === "Next" && count.endCount <= movies.length) {
      setCount((prev) => ({
        startCount: prev.startCount + 10,
        endCount: prev.endCount + 10,
      }));
    } else if (e.target.innerText === "Previous" && count.startCount !== 0) {
      setCount((prev) => ({
        startCount: prev.startCount - 10,
        endCount: prev.endCount - 10,
      }));
    }
  };

  return (
    <>
      <div className="container" id="movies">
        {movies.length === 0 ? (
          <>
            <div className="my-8">
              <span>No Movies Found...</span>
            </div>
          </>
        ) : (
          <div className="grid align-center grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
            {movies.slice(count.startCount, count.endCount)?.map((data) => (
              <div key={data.id}>
                <div className="max-w-sm bg-white w-full h-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <img
                    className="rounded-t-lg"
                    src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
                    alt="movie"
                  />

                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {data.original_title}
                    </h5>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {data.overview.slice(0, 70)}...
                    </p>
                    <Link
                      to={`/movies/${data.id}`}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        className="w-3.5 h-3.5 ml-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {movies.length > 0 && (
          <Pagination handlePagination={handlePagination} />
        )}
      </div>
    </>
  );
};

export default MainContents;
