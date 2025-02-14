import React from "react";
import "../styles/timepopup.css";

const TimePopup = ({ isOpen, onClose }) => {
  return (
    <>
      <div className={`mood-overlay ${isOpen ? "show" : ""}`} onClick={onClose}></div>
      <div className={`mood-popup ${isOpen ? "show" : ""}`}>
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2>How much time do you have?</h2>
        <div className="mood-buttons">
          <button className="mood-button">⏳ Under 90 minutes</button>
          <button className="mood-button">🎬 Around 2 hours</button>
          <button className="mood-button">📽️ More than 2.5 hours</button>
          <button className="mood-button">🕒 Time is not a factor</button>
        </div>
      </div>
    </>
  );
};

export default TimePopup;
