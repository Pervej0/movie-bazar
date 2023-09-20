import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../../../components/Navbar/Navbar";

const SingleMovie = () => {
  const [movieData, setMovieData] = useState({});
  let { movieId } = useParams();

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=87faa7fd1ab72d14a51ce99165c01511`;
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
        setMovieData(json);
      })
      .catch((err) => console.error("error:" + err));
  }, []);

  return (
    <div data-testid="parent">
      <Navbar background="bg-white" textColor="text-blue-500" />
      <div className="container">
        <div className="flex justify-end my-4">
          <Link to="/">
            <svg
              className="w-10 h-6 text-gray-800 dark:text-white"
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
        <div className="w-full lg:py-18 py-12">
          <div>
            <img
              className="max-w-sm bg-white w-full h-full border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              src={`https://image.tmdb.org/t/p/original/${movieData.backdrop_path}`}
              alt="movie details"
            />
          </div>
          <div>
            <h1 className="text-2xl my-4">{movieData.original_title}</h1>
            <p className="text-black text-lg">{movieData.overview}</p>
            <p className="text-black text-md my-2">
              <span className="font-bold">Release Date: </span>
              {movieData.release_date}
            </p>
            <p className="text-black text-md my-2">
              <span className="font-bold">Ratings: </span>
              {movieData.popularity}
            </p>
            <p className="text-black text-md my-2">
              <span className="font-bold">Spoken Languages: </span>
              {movieData.spoken_languages?.map((item) => item.english_name)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
