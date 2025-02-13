import React from "react";
import { Link } from "react-router-dom";
import { Search, Film } from "lucide-react";
import "../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-section">
        <Film className="logo-icon" />
        <h1 className="site-title">MovieMeter</h1>
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search movies..." className="search-input" />
        <button className="search-button">
          <Search className="search-icon" />
        </button>
      </div>

      <nav className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/trending" className="nav-link">Trending</Link>
        <Link to="/genres" className="nav-link">Genres</Link>
        <Link to="/favorites" className="nav-link">Favorites</Link>
      </nav>
    </header>
  );
};

export default Header;
// Compare this snippet from src/components/heroSection.jsx: