import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TrendingPage from "./pages/Trending"; // Import Trending Page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<TrendingPage />} /> {/* Add Route */}
      </Routes>
    </Router>
  );
}

export default App;
