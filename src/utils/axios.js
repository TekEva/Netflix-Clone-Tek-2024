// Importing the Axios library for making HTTP requests
import axios from "axios";

// Creating an Axios instance with a predefined base URL
const instance = axios.create({
  // Base URL for all TMDB API calls
  baseURL: "https://api.themoviedb.org/3",
});

// Exporting the Axios instance for use in other files
export default instance;

/*
How this file works:

 The base URL is prefixed to all endpoint paths defined in `request.js`.
 This ensures consistency and reduces duplication in code.
 For example:
   The request `fetchTrending` in `request.js` is `/trending/all/week?api_key=...`.
   With this base URL, the full request becomes `https://api.themoviedb.org/3/trending/all/week?api_key=...`.
*/
