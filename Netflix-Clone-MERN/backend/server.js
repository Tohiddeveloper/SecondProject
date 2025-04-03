import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path"; // Import path module
import connectDB from "./config/db.js";
import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";
import authRoutes from "./routes/authRoutes.js"; // Import Auth Routes
import movieRoutes from "./routes/movieRoutes.js";

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

app.get("/api", (req, res) => {
  res.send("Welcome to Netflix Clone API");
});

// Use Auth Routes
app.use("/api/auth", authRoutes);
app.use("/api/movies", movieRoutes);

// Serve Frontend Build
const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

// Error Handling Middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
