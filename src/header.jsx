import React from 'react';
import { Search, Film } from 'lucide-react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      {/* Logo Section */}
      <div className="logo-section">
        <Film className="logo-icon" />
        <h1 className="site-title">MovieMeter</h1>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search for movies, shows, actors..." 
          className="search-input"
        />
        <button className="search-button">
          <Search className="search-icon" />
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="nav-links">
        <a href="#home" className="nav-link">Home</a>
        <a href="#movies" className="nav-link">Movies</a>
        <a href="#shows" className="nav-link">TV Shows</a>
        <a href="#favorites" className="nav-link">Favorites</a>
      </nav>
    </header>
  );
};

export default Header;