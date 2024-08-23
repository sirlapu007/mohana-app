import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Confetti from 'react-confetti';
import { Howl } from 'howler';
import { FaHeart, FaStar, FaRegSmile } from 'react-icons/fa';
import { Fireworks } from '@fireworks-js/react'; // Import the Fireworks component
import './SurpriseAnimation.css'; // Import your CSS file

const SurpriseAnimation = () => {
  const [showImage, setShowImage] = useState(false);
  const [showEmojis, setShowEmojis] = useState(false);
  const [showText, setShowText] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [fireworksVisible, setFireworksVisible] = useState(false);

  const sound = new Howl({
    src: ["./src/birthday/happybirthday1.m4a"], // Replace with your sound file path
    volume: 0.5,
  });

  const handleClick = () => {
    sound.play();
    setShowImage(true);
    setShowEmojis(true); // Start emojis falling immediately when the image appears

    setTimeout(() => setShowImage(false), 10000); // Image displays for 10 seconds

    setTimeout(() => {
      setShowEmojis(false);
      setShowText(true);
    }, 10000); // Emojis and image are visible for 10 seconds

    setTimeout(() => {
      setFireworksVisible(true); // Start fireworks when text appears
    }, 10000); // Fireworks start when text appears

    setButtonClicked(true);
  };

  return (
    <div
      style={{
        backgroundColor: '#000',
        height: '100vh',
        overflow: 'hidden', // Prevent scrolling
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        fontFamily: '"Poppins", sans-serif',
        fontSize: '12pt',
        fontStyle: 'normal',
        fontWeight: 400,
        position: 'relative',
      }}
    >
      {!buttonClicked && (
        <motion.button
          onClick={handleClick}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: '200px',
            height: '50px',
            fontWeight: 200,
            fontSize: '18px',
            background: 'linear-gradient(to right, Tomato, orange, lightblue, Tomato)',
            backgroundSize: '600% 600%',
            border: '1px solid transparent',
            animation: 'gradient 30s linear infinite',
            color: 'white',
            boxShadow: 'rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px',
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Mohana Click Here
        </motion.button>
      )}

      {showImage && (
        <motion.img
          src="./src/birthday/mohna.jpeg" // Replace with your image path
          alt="Surprise"
          initial={{ opacity: 0, width: '10%' }}
          animate={{ opacity: 1, width: '100%' }}
          transition={{ duration: 10 }}
          exit={{ opacity: 0, scale: 0.5 }}
          style={{ borderRadius: '10px', marginTop: '20px' }}
        />
      )}

      {showEmojis && (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <Confetti numberOfPieces={300} colors={['#FFD700', '#FF69B4', '#87CEEB']} recycle={false} />
          {[...Array(50)].map((_, index) => {
            const emojis = [<FaHeart />, <FaStar />, <FaRegSmile />];
            const emoji = emojis[Math.floor(Math.random() * emojis.length)];
            return (
              <motion.div
                key={index}
                style={{
                  position: 'absolute',
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  fontSize: '2rem',
                  color: '#FFD700',
                }}
                animate={{ y: [0, 1000], opacity: [1, 0] }}
                transition={{ duration: Math.random() * 10 + 10, loop: false }}
              >
                {emoji}
              </motion.div>
            );
          })}
        </div>
      )}

{showText && (
  <motion.div
    className="particles-text"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 5, ease: "easeInOut" }}
    style={{
      fontSize: '3rem',
      textAlign: 'center',
      marginTop: '20px',
      fontWeight: 400,
      background: 'linear-gradient(to right, CornflowerBlue, Aqua, DeepPink, CornflowerBlue)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text', // This is necessary for text gradient
      color: 'transparent', // Hide the original color to show the gradient
      backgroundSize: '600% 600%',
      animation: 'gradient 20s linear infinite',
      filter: 'drop-shadow(0px 0px 30px CornflowerBlue)',
      textShadow: '0px 0px 3px CornflowerBlue'
    }}
  >
    Happy Birthday Mohana
  </motion.div>
)}

      

      {fireworksVisible && (
        <Fireworks
          options={{
            rocketsPoint: { min: 0, max: 100 },
            hue: { min: 0, max: 360 },
            particles: 100,
            delay: { min: 100, max: 200 }, // Increase frequency of fireworks
            brightness: { min: 50, max: 80 },
            explosion: 12, // Increase explosion duration
          }}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          onFinish={() => setFireworksVisible(false)}
        />
      )}
    </div>
  );
};

export default SurpriseAnimation;
