import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjBiMTQ5ZDY2YTY1ODU0ODhmMmFjMDU3YTQ1OTZhNiIsIm5iZiI6MTc0NDg3OTU2OS4yMzEsInN1YiI6IjY4MDBiZmQxYzc3ZmQxZGY3NGFkMjhhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UHe5f9DwvtFREeyuqRplVXFiouwBvf4J0VLvEpf_co4"; // або api_key, якщо хочеш через URL

const options = {
  headers: {
    Authorization: `Bearer ${TOKEN}`,
  },
};

export const fetchTrendingMovies = async () => {
  const url = `${BASE_URL}/trending/movie/day`;
  const response = await axios.get(url, options);
  return response.data.results;
};

export const fetchMoviesByQuery = async (query) => {
  const url = `${BASE_URL}/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
  const response = await axios.get(url, options);
  return response.data.results;
};

export const fetchMovieById = async (movieId) => {
  const url = `${BASE_URL}/movie/${movieId}`;
  const response = await axios.get(url, options);
  return response.data;
};

export const fetchCastById = async (movieId) => {
  const url = `${BASE_URL}/movie/${movieId}/credits?language=en-US`;
  const response = await axios.get(url, options);
  return response.data.cast;
};

export const fetchReviewsById = async (movieId) => {
  const url = `${BASE_URL}/movie/${movieId}/reviews?language=en-US&page=1`;
  const response = await axios.get(url, options);
  return response.data.results;
};
