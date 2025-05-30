import React from "react";
import ReactCompareImage from "react-compare-image";
import sliderBackground from "../../assets/images/sliderbackground.jpg";
import "./Slider.scss"

const Slider = ({ beforeImg, afterImg }) => {
  return (
    <>
    <div className="slider__container">
    <div 
      className="slider__man"
      style={{
        backgroundImage: `url(${sliderBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",       
        margin: "auto",       
      }}
    >
      <ReactCompareImage className = "slider__man"
        leftImage={beforeImg}
        rightImage={afterImg}
        style={{ height: "100%" }} // ensure the slider fills container height
      />
    </div>
    </div>
    </>
  );
};

export default Slider;
