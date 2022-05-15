import { useParams, useNavigate } from "react-router-dom";
import Movies from "../components/Movies";

function Rate() {
  const { id } = useParams();
  const movie = Movies[id];
  const navigate = useNavigate();

  return (
    <div>
      <h1> {movie.rating} </h1>
      <button onClick={() => navigate("/")}>Go to home </button>
      <button onClick={() => navigate(`/details/${id}/MovieRate/contact`)}>
        Go to contact
      </button>
    </div>
  );
}

export default Rate;
