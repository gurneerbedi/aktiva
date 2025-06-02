import React from "react";
import "./Hero.scss";

const Hero = ({
  backgroundImg,
  title,
  showOverlay = true,
  overlayOpacity = 0.4, // Default to 0.4
  overlayColor = "black", // Default to black color
  overlayPosition = "center", 
}) => {
  return (
    <div className="hero-section" style={{ backgroundImage: `url(${backgroundImg})` }}>
      {showOverlay && (
        <div
          className="hero-section__overlay"
          style={{
            backgroundColor: `rgba(${overlayColor}, ${overlayOpacity})`, 
            display: overlayPosition === "center" ? "flex" : "block", 
          }}
        >
          <h1 className="hero-section__title">{title}</h1>
        </div>
      )}
    </div>
  );
};

export default Hero;
