import { useParams, useNavigate } from "react-router-dom";
import Movies from "../components/Movies";
function Details() {
  const { id } = useParams();
  const movie = Movies[id]; //movie object
  const navigate = useNavigate();
  return (
    <div>
      <h1> {movie.title}</h1>
      <img
        src={movie.posterURL}
        alt=""
        onClick={() => navigate(`/details/${id}/MovieRate`)}
      />
      <h2> {movie.description} </h2>
      <iframe
        src="https://www.youtube.com/watch?v=7vUQYzZ_UZc"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
        title="video"
      />
      <button onClick={() => navigate("/")}> Go to Home</button>
    </div>
  );
}
export default Details;
