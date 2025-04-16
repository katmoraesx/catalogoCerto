import React from "react";
import styles from "./Card.module.css";

const Card = ({ movie }) => {
  return (
    <div className={styles.container}>
      <h3>{movie.title}</h3>
      <img src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <p>{movie.overview}</p>
    </div>
  );
};

export default Card;
