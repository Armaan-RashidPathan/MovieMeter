import React from "react";
import "../styles/moodmodal.css";

const moods = [
  { label: "Happy & Upbeat", color: "#ff9800" },
  { label: "Relaxed & Calm", color: "#4caf50" },
  { label: "Thoughtful & Introspective", color: "#9c27b0" },
  { label: "Energetic & Excited", color: "#ff5722" },
  { label: "Melancholic", color: "#607d8b" },
  { label: "Need a Mood Boost", color: "#3f51b5" },
];

const MoodModal = ({ onClose }) => {
  const handleMoodSelect = (mood) => {
    alert(`You chose: ${mood}`); // Replace with navigation or API call
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>How are you feeling right now?</h2>
        <div className="mood-options">
          {moods.map((mood) => (
            <button
              key={mood.label}
              className="mood-btn"
              style={{ backgroundColor: mood.color }}
              onClick={() => handleMoodSelect(mood.label)}
            >
              {mood.label}
            </button>
          ))}
        </div>
        <button className="close-btn" onClick={onClose}>
          ✖ Close
        </button>
      </div>
    </div>
  );
};

export default MoodModal;
