import React from "react";
import "../styles/trending.css";

const TrendingPage = () => {
  // Sample Data (Replace with API Data Later)
  const top10Movies = [
    { id: 1, title: "Dune: Part Two", image: "/images/dune.jpg", rating: "8.5" },
    { id: 2, title: "Oppenheimer", image: "/images/oppenheimer.jpg", rating: "9.0" },
    { id: 3, title: "Spider-Man: Across the Spider-Verse", image: "/images/spiderman.jpg", rating: "8.8" },
    // Add more movie objects...
  ];

  const bestOfTheMonth = [
    { id: 1, title: "The Killer", image: "/images/killer.jpg", rating: "8.3" },
    { id: 2, title: "Napoleon", image: "/images/napoleon.jpg", rating: "8.1" },
    // Add more...
  ];

  return (
    <div className="trending-page">
      <h1>Trending Now</h1>

      {/* Top 10 Movies Section */}
      <section className="movie-section">
        <h2>🔥 Top 10 Movies</h2>
        <div className="movie-grid">
          {top10Movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img src={movie.image} alt={movie.title} />
              <div className="movie-info">
                <p>{movie.title}</p>
                <p>⭐ {movie.rating}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Best of the Month Section */}
      <section className="movie-section">
        <h2>🏆 Best of the Month</h2>
        <div className="movie-grid">
          {bestOfTheMonth.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img src={movie.image} alt={movie.title} />
              <div className="movie-info">
                <p>{movie.title}</p>
                <p>⭐ {movie.rating}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default TrendingPage;
