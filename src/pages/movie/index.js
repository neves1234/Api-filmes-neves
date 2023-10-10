import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./styles.css";

const Movie = () => {
  const { id } = useParams();
  const imagePath = "https://image.tmdb.org/t/p/w500";
  const [movie, setMovie] = useState({});
  const KEY = process.env.REACT_APP_KEY;

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${KEY}&language=pt-BR`)
      .then((response) => response.json())
      .then((data) => {
        setMovie(data);
      });
  }, [id, KEY]);

  return (
    <div style={{ backgroundColor: "white", padding: "20px" }}>
      <nav>
        <h1>Movies</h1>
      </nav>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="card" style={{ width: "80%" }}>
          <div style={{ textAlign: "center" }}>
            <img className="img_movie" src={`${imagePath}${movie.poster_path}`} alt={movie.title} style={{ width: "300px" }} />
          </div>
          <div className="descricao" style={{ textAlign: "center" }}>
            <h3>{movie.title}</h3>
            <h4>Data de lançamento: {movie.release_date}</h4>
            <p className="movie-desc">{movie.overview}</p>
          </div>
        </div>
      </div>
      <Link to="/">
        <button className="link_button">Voltar</button>
      </Link>
    </div>
  );
};

export default Movie;
