import axios from "axios";

export const fetchMovies = async (query) => {
  const url = `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${query}`;

  const options = {
    headers: {
      Authorization: "Bearer ТВОЯ_КЛЮЧ_ТУТ",
    },
  };

  try {
    const response = await axios.get(url, options);
    return response.data.results;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
