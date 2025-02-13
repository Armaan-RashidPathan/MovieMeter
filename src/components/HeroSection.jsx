import React from "react";
import "../styles/hero.css";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Find the Best Movies for Your Mood</h1>
        <p className="hero-subtitle">AI-powered insights from real audience reviews</p>
        <button className="explore-button">Find Your Next Movie</button>
      </div>
    </section>

    
  );
};

export default HeroSection;
