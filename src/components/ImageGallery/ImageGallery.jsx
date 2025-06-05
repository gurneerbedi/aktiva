import React, { useState, useEffect } from "react";
import "./ImageGallery.scss";

const ImageGallery = ({ slides }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="gallery">
      {isMobile ? (
        <div className="gallery__mobile">
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
          <img
            src={slides[activeIndex].image}
            alt={`Slide ${activeIndex + 1}`}
            className="gallery__image"
          />
          {slides[activeIndex].heading && (
            <h3 className="gallery__heading">
              {slides[activeIndex].heading}
            </h3>
          )}
          <p className="gallery__text">{slides[activeIndex].text}</p>
        </div>
      ) : (
        <div className="gallery__grid">
          {slides.map((slide, index) => (
            <div key={index} className="gallery__item">
              <div className="gallery__content">
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="gallery__image"
                />
                <div className="gallery__heading-text">
                  {slide.heading && (
                    <h3 className="gallery__heading">{slide.heading}</h3>
                  )}
                  <p className="gallery__text">{slide.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
