import "./MovieCard.css";

function MovieCard({ Movies: { posterURL, title, rating }, onClick }) {
  //onClick as a prop
  return (
    <div onClick={onClick} className="card movie_card">
      <img //onCLick from movelist to get index num
        src={posterURL}
        width="100rem"
        height="100rem"
        className="card-img-top"
        alt="movie-poster"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <span className="float-right">
          <i className="fas fa-star"></i>
          {rating} / 10
        </span>
      </div>
    </div>
  );
}

export default MovieCard;
