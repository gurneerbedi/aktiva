import React, { useState, useEffect } from "react";
import "./ImageGallery.scss";

const ImageGallery = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="gallery">
      {isMobile ? (
        <div className="gallery__mobile">
          <img
            src={slides[activeIndex].image}
            alt={`Slide ${activeIndex + 1}`}
            className="gallery__image"
          />
          <p className="gallery__text">{slides[activeIndex].text}</p>
          <div className="gallery__dots">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`gallery__dot ${
                  activeIndex === index ? "gallery__dot--active" : ""
                }`}
              >
                {String(index + 1).padStart(2, "0")}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="gallery__grid">
          {slides.map((slide, index) => (
            <div key={index} className="gallery__item">
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="gallery__image"
              />
              <p className="gallery__text">{slide.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
