import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const movies = await fetchTrendingMovies();
        setMovies(movies);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <MovieList data={movies} />
    </div>
  );
};

export default HomePage;
