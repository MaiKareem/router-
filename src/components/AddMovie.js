import React, { useState } from "react";

function AddMovie({ addMovie }) {
  // const [title, setTitle] = useState("");
  // const [description, setDescription] = useState("");
  // const [url, setUrl] = useState("");
  // const [rating, setRating] = useState("");
  const [movie, setMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    url: "",
    rating: 0,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie((prev) => [
      ...prev, //to access old state
      movie, //to add to object
    ]);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Movie Title:
        <input
          type="text"
          value={movie.title}
          onChange={(e) =>
            setMovie((prev) => ({ ...prev, title: e.target.value }))
          } //add to the prev values ,and only affecting title
        />
      </label>
      <label>
        Movie description:
        <input
          type="text"
          value={movie.description}
          onChange={(e) =>
            setMovie((prev) => ({ ...prev, description: e.target.value }))
          }
        />
      </label>
      <label>
        Movie Picture url:
        <input
          type="text"
          value={movie.url}
          onChange={(e) =>
            setMovie((prev) => ({ ...prev, url: e.target.value }))
          }
        />
      </label>
      <label>
        Movie rating:
        <input
          type="number"
          value={movie.rating}
          onChange={(e) =>
            setMovie((prev) => ({ ...prev, rating: e.target.value }))
          }
        />
      </label>
      <input type="submit" value="submit" />
    </form>
  );
}

export default AddMovie;
