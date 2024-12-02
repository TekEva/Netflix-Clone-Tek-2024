// Retrieving the API key from environment variables
const API_KEY = import.meta.env.VITE_API_KEY;

// Object containing all API request endpoints
const requests = {
  // Fetching trending movies or shows for the week
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=enUS`,
  // Fetching Netflix Originals
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  // Fetching toprated movies
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=enUS`,
  // Fetching action movies
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  // Fetching comedy movies
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  // Fetching horror movies
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  // Fetching romance movies
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  // Fetching documentaries
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  // Fetching popular TV shows
  fetchTvShow: `/tv/popular?api_key=${API_KEY}&language=enUS&page=1`,
};

// Exporting the requests object to be used across the app
export default requests;

/*
How to understand this file:

 Each key in the `requests` object represents a category for movie data.
 Each value is a specific endpoint for The Movie Database (TMDB) API.
 The base URL (used in axios.js) is concatenated with these endpoints to form complete URLs.
 The `API_KEY` is required to authenticate API calls. It is stored securely in environment variables.
*/
