import React, { useEffect, useState } from "react";
import AddMovie from "./AddMovie";
import MovieList from "./MovieList";
import Movies from "./Movies.js";
import { Modal, Button } from "react-bootstrap";

function FilterMovie() {
  const [movie, setMovie] = useState(""); //search
  const [range, setRange] = useState(10);
  const [filteredMovie, setFilteredMovies] = useState(Movies); //to show filtered movies
  const [originalMovies, setoriginalMovies] = useState(Movies); //for adding movies and adjusting filter according to it

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const filter = originalMovies.filter(
      (
        item //search
      ) => item.title.toLowerCase().includes(movie.toLowerCase())
    );
    const rate = filter.filter((item) => item.rating <= range);
    setFilteredMovies(rate);
  }, [movie, range, originalMovies]);

  return (
    <div className="container mt-5">
      <div className="row justify-content-between">
        <input
          type="text"
          placeholder="Search by title"
          value={movie}
          onChange={(e) => setMovie(e.target.value)}
        />

        <div>
          <input
            type="range"
            step="10"
            value={range * 10}
            onChange={(e) => setRange(Math.round(e.target.value / 10))}
            className="mr-3"
          />
          <span>{range} / 10</span>
        </div>
      </div>
      <MovieList movies={filteredMovie} />
      <Button variant="primary" onClick={handleShow}>
        add movie
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddMovie addMovie={setoriginalMovies} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default FilterMovie;
