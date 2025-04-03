import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Movies from "./pages/Movies";

function App() {
    return (
        <Router>
            <Routes>
                {/* Default Home Page */}
                <Route path="/" element={<h1>Welcome to Netflix Clone</h1>} />
                
                {/* Movies Page */}
                <Route path="/movies" element={<Movies />} />
            </Routes>
        </Router>
    );
}

export default App;
