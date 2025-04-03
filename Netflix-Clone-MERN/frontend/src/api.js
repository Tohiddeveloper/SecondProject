import axios from "axios";

const API_URL = "http://localhost:5000/api/movies"; // Change this in production

export const getMovies = async () => {
    try {
        const res = await axios.get(API_URL);
        return res.data;
    } catch (err) {
        console.error("Error fetching movies:", err);
        return [];
    }
};
