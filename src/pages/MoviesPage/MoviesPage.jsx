import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { fetchMoviesByQuery } from "../../services/api";
import { Link } from "react-router-dom";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setMovies([]);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const query = form.elements.query.value.trim();

    if (query === "") {
      toast.error("Please enter a search term!");
      return;
    }

    handleSearch(query);
    form.reset();
  };

  useEffect(() => {
    if (!query) return;

    const getMovies = async () => {
      try {
        const fetchedMovies = await fetchMoviesByQuery(query);
        if (fetchedMovies.length === 0) {
          toast.error("No movies found!");
        }
        setMovies(fetchedMovies);
      } catch (error) {
        toast.error("Something went wrong!");
      }
    };

    getMovies();
  }, [query]);

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map((item) => (
          <li key={item.id}>
            <Link to={`/movies/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>

      <Toaster position="top-center" reverseOrder={false} />
    </header>
  );
};

export default MoviesPage;
