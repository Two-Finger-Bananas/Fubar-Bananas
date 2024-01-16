import React, { useState, useEffect } from "react";
import './slideShow.css';

export default function SlideShow({ gameInfo }) {
  const [currentImage, setCurrentImage] = useState(0);
  

  useEffect(() => {
    const imageShow = setInterval(() => {
      setCurrentImage((prevIndex) => {
        console.log(prevIndex);
        return prevIndex === gameInfo.length - 1 ? 0 : prevIndex + 1;
      });
    }, 5000);
  
    return () => {
      clearInterval(imageShow);
    };
  }, [gameInfo,currentImage]);
  
 

  return (
    <div className="slideshow-container">
      {gameInfo.map((game, idx) => (
        <div
          key={idx}
          className={`slideshow-image ${idx === currentImage ? 'active' : ''}`}
          style={{
            backgroundImage: `url(${game.backgroundImg})`,
            display: idx === currentImage ? 'block' : 'none', // Ensure only the active image is displayed
          }}
        />
      ))}
    </div>
  );
}
