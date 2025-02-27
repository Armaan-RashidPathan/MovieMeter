import React, { useState } from "react";
import "../styles/hero.css";

const HeroSection = () => {
  const [step, setStep] = useState(1);
  const [showPopup, setShowPopup] = useState(false);

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      setShowPopup(false);
    }
  };

  return (
    <section className="hero-section">
      <h1>Find Your Next Movie</h1>
      <button className="find-movie-btn" onClick={() => setShowPopup(true)}>
        Find Your Next Movie
      </button>

      {showPopup && (
        <div className="popup-container">
          <h2 className="popup-title">
            {step === 1 && "How are you feeling right now?"}
            {step === 2 && "How much time do you have?"}
            {step === 3 && "Select Your Age Category"}
          </h2>

          {step === 1 && (
            <div className="slide-enter">
              <button className="option-btn" onClick={handleNext}>Happy & Upbeat</button>
              <button className="option-btn" onClick={handleNext}>Relaxed & Calm</button>
              <button className="option-btn" onClick={handleNext}>Thoughtful & Introspective</button>
              <button className="option-btn" onClick={handleNext}>Energetic & Excited</button>
              <button className="option-btn" onClick={handleNext}>Melancholic</button>
              <button className="option-btn" onClick={handleNext}>Need a Mood Boost</button>
            </div>
          )}

          {step === 2 && (
            <div className="slide-enter">
              <button className="option-btn" onClick={handleNext}>Under 90 minutes</button>
              <button className="option-btn" onClick={handleNext}>Around 2 hours</button>
              <button className="option-btn" onClick={handleNext}>More than 2.5 hours</button>
              <button className="option-btn" onClick={handleNext}>Time is not a factor</button>
            </div>
          )}

          {step === 3 && (
            <div className="slide-enter">
              <button className="option-btn" onClick={handleNext}>Kids (Under 12)</button>
              <button className="option-btn" onClick={handleNext}>Teens (13-17)</button>
              <button className="option-btn" onClick={handleNext}>Adults (18+)</button>
            </div>
          )}

          <div className="progress-indicator">
            <span className={`progress-dot ${step === 1 ? "active" : ""}`}></span>
            <span className={`progress-dot ${step === 2 ? "active" : ""}`}></span>
            <span className={`progress-dot ${step === 3 ? "active" : ""}`}></span>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
