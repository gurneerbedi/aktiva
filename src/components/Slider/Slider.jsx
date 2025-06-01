import React from "react";
import ReactCompareImage from "react-compare-image";
import sliderBackground from "../../assets/images/sliderbackground.jpg";
import "./Slider.scss"

const Slider = ({ beforeImg, afterImg }) => {
  return (
    <>
    <div className="slider__container"
       style={{
        backgroundImage: `url(${sliderBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",           
      }}>
    <div 
      className="slider__man"
     
    >
      <ReactCompareImage 
        leftImage={beforeImg}
        rightImage={afterImg}
        style={{ height: "100%", width: "100%"
        }} 
      />
    </div>
    </div>
    </>
  );
};

export default Slider;
