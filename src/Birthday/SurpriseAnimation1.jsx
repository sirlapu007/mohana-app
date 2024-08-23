import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Howl } from 'howler';
import './SurpriseAnimation1.css'; // Import your CSS file

const SurpriseAnimation1 = () => {
  const [showText, setShowText] = useState(false);

  // Configure sound
  const sound = new Howl({
    src: ["./src/birthday/happybirthday.mp3"], // Replace with your sound file path
    volume: 0.5,
  });

  // Initialize Particles
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  // Handle button click to start animation
  const handleClick = () => {
    setShowText(true);
  };

  useEffect(() => {
    if (showText) {
      sound.play();
    }
  }, [showText]);

  return (
    <div
      style={{
        backgroundColor: '#000',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      <motion.button
        onClick={handleClick}
        style={{
          background: 'linear-gradient(45deg, #ff4081, #4caf50)',
          border: 'none',
          padding: '20px 40px',
          fontSize: '1.5rem',
          color: '#fff',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Click Me!
      </motion.button>

      {showText && (
        <>
          <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
              background: {
                color: {
                  value: "#000",
                },
              },
              particles: {
                number: {
                  value: 100,
                },
                shape: {
                  type: "star",
                },
                opacity: {
                  value: 0.8,
                },
                size: {
                  value: 5,
                },
                move: {
                  enable: true,
                  speed: 5,
                },
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: false,
                  },
                },
              },
              retina_detect: true,
            }}
          />
          <motion.div
            className="particles-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 5, ease: "easeInOut" }}
          >
            Happy Birthday Mohana
          </motion.div>
        </>
      )}
    </div>
  );
};

export default SurpriseAnimation1;
