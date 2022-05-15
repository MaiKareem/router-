import { useNavigate } from "react-router-dom";
import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  const navigate = useNavigate();
  return (
    <div className="row justify-content-center">
      {movies.map((item, index) => (
        <MovieCard
          key={index}
          Movies={item}
          onClick={() => navigate(`/details/${index}`)} //back ticks to get index variable
        />
      ))}
    </div>
  );
}
export default MovieList;
