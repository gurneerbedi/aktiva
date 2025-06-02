import "./HomePage.scss";
import React, { useRef, useState } from "react";
import Banner from "../../components/Banner/Banner.jsx";
import Buildyourbody from "../../components/Buildyourbody/Buildyourbody.jsx";
import Amenities from "../../components/Amenities/Amenities.jsx";
import HomeBackgroundImg from "../../assets/images/homebackground.jpeg";
import Slider from "../../components/Slider/Slider.jsx";
import transformingManBefore from "../../assets/images/transformingmanbefore.png";
import transformingManAfter from "../../assets/images/transformingmanafter.png";
import video from "../../assets/images/video.mp4";
import ImageGallery from "../../components/ImageGallery/ImageGallery.jsx";
import Slide01 from "../../assets/images/slide01.png";
import Slide02 from "../../assets/images/slide02.png";
import Slide03 from "../../assets/images/slide03.png";
import Slide04 from "../../assets/images/slide04.png";
import Reviews from "../../components/Reviews/Reviews.jsx";
import woman from "../../assets/images/womanhero.png";

function HomePage() {

  
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleTogglePlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const slides = [
    {
      image: Slide01,
      text: "Conducting a focused yet comprehensive interview to understand the client's goals, while evaluating their strengths and weaknesses. We will cover aspects such as their nutrition, any existing injuries, or limitations which will help identify key problem areas and determine what requires further attention and improvement.",
      heading: "COMPREHENSIVE ASSESSMENT",
    },
    {
      image: Slide02,
      heading: "IMPLEMENT & BUILD FOUNDATION",
      text: "Develop and implement a new training program based on insights and analysis from the previous stage, establishing a solid and enduring foundation for future growth and progress. Prepare and start with a custom tailored Body Recomposition plan designed to accelerate your journey, effectively target stubborn fat, and stimulate muscle development.",
    },
    {
      image: Slide03,
      heading: "ADVANCED PROGRESSION & RETENTION",
      text: "After establishing a solid foundation and observing positive improvements in the client's fitness capabilities, we will progress to more advanced exercise techniques. This phase will incorporate methods such as Integrated Training and Metabolic Conditioning to further enhance performance and results.` Ensure long-term success by designing sustainable programs that focus on advanced criteria including tailored diets and optimized nutrition plans. Maintain client motivation and accountability to support consistent progress over time. ",
    },
    {
      image: Slide04,
      text: "With results now clearly evident and the client well on their way to achieving their desired goals, it's time to take pride in their accomplishments. Depending on the needs and future goals in mind, we will likely transition to Exercise Regression workouts, which are designed to maintain muscle growth while reducing intense exertion. This phase involves crafting a balanced plan that strikes a perfect equilibrium preserving your newly achieved physique while still offering opportunities to challenge yourself in engaging and innovative ways.",
      heading: "TRANSFORMATION & MAINTENANCE",
    },
  ];
  
  return (
    <>
      <div className="homepage">
        <div className="homepage__header">
          <h1 className="homepage__heading-small">LIVE YOUR BEST LIFE</h1>
          <h1 className="homepage__heading-big">STAY ACTIVE</h1>
          <button className="homepage__button">
            Start Your Training Today
          </button>
        </div>
        <div className="homepage__videocontainer">
          <div
            className={`homepage__video-wrapper ${isPlaying ? "playing" : ""}`}
          >
            <video
              className="homepage__video"
              ref={videoRef}
              src={video}
              muted
              playsInline
            />
            <button
              className="homepage__play-button"
              onClick={handleTogglePlay}
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? "⏸" : "▶"}
            </button>
          </div>
        </div>

        <div className="homepage__process">
          <h2 className="homepage__heading">
            AKTIVA TRANSFORMATION <span className="highlight">PROCESS</span>
          </h2>
          <p className="homepage__details">
            Our tested and proven approach to get you where you want to be.
          </p>
        </div>
        <ImageGallery slides={slides} />
      </div>
      <Buildyourbody />
      <Amenities></Amenities>
      <div className="homepage__amenities-hero">
        <img className="homepage__amenities-heroimg"src={woman} alt="woman holding weights" />
      </div>
      <Reviews></Reviews>
      
      {/* <Banner></Banner> */}
    </>
  );
}

export default HomePage;
