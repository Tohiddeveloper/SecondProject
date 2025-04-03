import express from "express";
import { getAllMovies, getMovieById, addMovie } from "../controllers/movieController.js";
import { protect } from "../middlewares/authMiddleware.js"; // ✅ Correct import

const router = express.Router();

router.get("/", getAllMovies);
router.get("/:id", getMovieById);
router.post("/", protect, addMovie); // ✅ Use `protect` instead of `authMiddleware`

export default router;
