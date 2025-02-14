import React, { useState } from "react";
import MoodModal from "./MoodModal"; // Import the mood modal

import "../styles/hero.css";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Find Your Next Movie</h1>
        <p>Let AI suggest the best movie based on your mood.</p>
        
        {/* Existing button triggers the modal */}
        <button className="find-movie-btn" onClick={() => setIsModalOpen(true)}>
          🎥 Find Your Next Movie
        </button>
      </div>

      {/* Mood Selection Modal */}
      {isModalOpen && <MoodModal onClose={() => setIsModalOpen(false)} />}
    </section>
  );
};

export default Hero;
