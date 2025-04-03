import React, { useEffect, useState } from "react";
import { getMovies } from "../api";
import MovieCard from "../components/MovieCard";
import "../styles/Movies.css";

const Movies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            const data = await getMovies();
            setMovies(data);
        };
        fetchMovies();
    }, []);

    return (
        <div className="movies-container">
            <h2>Movies</h2>
            <div className="movies-grid">
                {movies.length > 0 ? (
                    movies.map((movie) => <MovieCard key={movie._id} movie={movie} />)
                ) : (
                    <p>Loading movies...</p>
                )}
            </div>
        </div>
    );
};

export default Movies;
