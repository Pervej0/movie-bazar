import React, { useEffect, useState } from "react";

const useMovies = (searchText) => {
  const [movies, setMovies] = useState([]);
  const [isloading, setIsloading] = useState(true);

  useEffect(() => {
    if (searchText === undefined || searchText === "") {
      return;
    }
    const url = `https://api.themoviedb.org/3/search/movie?query=${searchText}&api_key=87faa7fd1ab72d14a51ce99165c01511`;
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
        console.log("holoooooooooo");
        setIsloading(false);
        setMovies(json.results);
      })
      .catch((err) => console.error("error:" + err));
  }, [searchText]);

  return [movies, isloading];
};

export default useMovies;
