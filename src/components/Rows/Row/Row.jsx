// Importing required dependencies
import React, { useEffect, useState } from "react";
import "./row.css";
import axios from "../../../utils/axios.js";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

// Functional component for rendering rows of movies
const Row = ({ title, fetchUrl, isLargeRow }) => {
  // State to store movie data
  const [movies, setMovie] = useState([]);
  // State to store trailer URL
  const [trailerUrl, setTrailerUrl] = useState("");

  // Base URL for movie posters
  const base_url = "https://image.tmdb.org/t/p/original";

  // Fetching movie data on component load or when fetchUrl changes
  useEffect(() => {
    (async () => {
      try {
        // Making an API request to fetch movies
        const request = await axios.get(fetchUrl);
        // Storing the fetched movie data
        setMovie(request.data.results);
      } catch (error) {
        // Logging error if the API request fails
        console.log("error", error);
      }
    })();
  }, [fetchUrl]);

  // Handling clicks on a movie poster to fetch its trailer
  const handleClick = (movie) => {
    if (trailerUrl) {
      // Closing the trailer if it is already open
      setTrailerUrl("");
    } else {
      // Fetching the trailer URL for the selected movie
      movieTrailer(movie?.title || movie?.name || movie?.original_name).then(
        (url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        }
      );
    }
  };

  // YouTube player options
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      {/* Displaying the row title */}
      <h1>{title}</h1>
      {/* Displaying movie posters */}
      <div className="row__posters">
        {movies?.map((movie, index) => (
          <img
            onClick={() => handleClick(movie)}
            key={index}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
          />
        ))}
      </div>
      {/* Displaying the trailer if available */}
      <div style={{ padding: "20px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

// Exporting Row component
export default Row;
