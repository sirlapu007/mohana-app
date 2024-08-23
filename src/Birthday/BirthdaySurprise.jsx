import React, { useState, useRef } from 'react';
import Fireworks from '@fireworks-js/react';
import './BirthdaySurprise.css'; // For custom styling

const BirthdaySurprise = () => {
  const [showFireworks, setShowFireworks] = useState(false);
  const [showText, setShowText] = useState(false);
  const [imageVisible, setImageVisible] = useState(true);
  const [emojisVisible, setEmojisVisible] = useState(false);

  const handleClick = () => {
    // Step 1: Animate the image
    setTimeout(() => {
      setImageVisible(false);
      setEmojisVisible(true);
    }, 3000); // Duration for the image to appear

    // Step 2: Show the text and start fireworks after emojis
    setTimeout(() => {
      setEmojisVisible(false);
      setShowText(true);
      setShowFireworks(true);
    }, 5000); // Time after emojis to show text
  };

  return (
    <div className="surprise-container">
      <button onClick={handleClick} className="trigger-button">Click Me</button>
      
      {/* Image Animation */}
      {imageVisible && (
        <div className="image-container">
          <img
            src="./src/birthday/mohna.jpeg"
            alt="Surprise"
            className="surprise-image"
          />
        </div>
      )}
      
      {/* Emojis Animation */}
      {emojisVisible && (
        <div className="emoji-container">
          <span role="img" aria-label="emoji" className="emoji">🎉</span>
          {/* Add more emojis if desired */}
        </div>
      )}
      
      {/* Fireworks */}
      {showFireworks && (
        <Fireworks
          options={{
            // Customize the fireworks options if needed
          }}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        />
      )}
      
      {/* Happy Birthday Text */}
      {showText && (
        <div className="happy-birthday">
          <h1>Happy Birthday Mohana!</h1>
        </div>
      )}
    </div>
  );
};

export default BirthdaySurprise;
