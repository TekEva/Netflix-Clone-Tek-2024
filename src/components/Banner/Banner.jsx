// Importing required dependencies
import React, { useEffect, useState } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/request";
import "./banner.css";

// Functional component for the Banner section
const Banner = () => {
  // State to store the selected movie data
  const [movie, setMovie] = useState({});

  // Fetching Netflix Originals movies on component load
  useEffect(() => {
    (async () => {
      try {
        // Making an API request to fetch Netflix Originals
        const request = await axios.get(requests.fetchNetflixOriginals);
        // Setting a random movie from the fetched results
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ]
        );
      } catch (error) {
        // Logging error if the API request fails
        console.log("error", error);
      }
    })();
  }, []);

  // Function to truncate the description text to a specified length
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    // Styling banner using the movie's backdrop image
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Banner content */}
      <div className="banner__contents">
        {/* Displaying the movie's title */}
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/* Play and My List buttons */}
        <div className="banner__buttons">
          <button className="banner__button play">Play</button>
          <button className="banner__button">My List</button>
        </div>
        {/* Truncated movie description */}
        <h1 className="banner__description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      {/* Adding a gradient fade effect at the bottom */}
      <div className="banner__fadeBottom" />
    </div>
  );
};

// Exporting Banner component
export default Banner;
