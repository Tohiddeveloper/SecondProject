import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/MovieDetails.css";

const MovieDetails = () => {
    const { id } = useParams(); // Get movie ID from URL
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/movies/${id}`);
                setMovie(response.data);
            } catch (error) {
                console.error("Error fetching movie details:", error);
            }
        };

        fetchMovie();
    }, [id]);

    if (!movie) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="movie-details">
            <img src={movie.img} alt={movie.title} className="movie-img" />
            <div className="movie-info">
                <h1>{movie.title}</h1>
                <p>{movie.desc}</p>
                <strong>Genre:</strong> {movie.genre} <br />
                <strong>Release Year:</strong> {movie.year} <br />
                <button className="watch-btn">Watch Now</button>
            </div>
        </div>
    );
};

export default MovieDetails;
