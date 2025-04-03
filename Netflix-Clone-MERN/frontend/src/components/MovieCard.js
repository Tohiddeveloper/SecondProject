import React from "react";

const MovieCard = ({ movie }) => {
    return (
        <div className="movie-card">
            <img src={movie.img} alt={movie.title} />
            <h3>{movie.title}</h3>
            <p>{movie.desc.substring(0, 100)}...</p>
        </div>
    );
};

export default MovieCard;
