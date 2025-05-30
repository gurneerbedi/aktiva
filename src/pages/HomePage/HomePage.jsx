import "./HomePage.scss";
import React, { useRef, useState } from "react";
import Banner from "../../components/Banner/Banner.jsx"
import Buildyourbody from "../../components/Buildyourbody/Buildyourbody.jsx";
import Amenities from "../../components/Amenities/Amenities.jsx";
import HomeBackgroundImg from "../../assets/images/homebackground.jpeg"
import Slider from "../../components/Slider/Slider.jsx";
import transformingManBefore from "../../assets/images/transformingmanbefore.png";
import transformingManAfter from "../../assets/images/transformingmanafter.png";
import video from "../../assets/images/video.mp4"
import ImageGallery from "../../components/ImageGallery/ImageGallery.jsx";
import Slide01 from "../../assets/images/slide01.png"
import Slide02 from "../../assets/images/slide02.png"
import Slide03 from "../../assets/images/slide03.png"
import Slide04 from "../../assets/images/slide04.png"

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
  { image: Slide01, text: "Slide One" },
  { image: Slide02, text: "Slide Two" },
  { image: Slide03, text: "Slide Three" },
  { image: Slide04, text: "Slide Four" },
];
    return (
        <>
        <div className="homepage">
            <div className="homepage__header">
            <h1 className="homepage__heading-small">LIVE YOUR BEST LIFE</h1>
            <h1 className="homepage__heading-big">STAY ACTIVE</h1>
            <button className="homepage__button">Start Your Training Today</button>
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
                <h2 className="homepage__heading">AKTIVA TRANSFORMATION PROCESS</h2>
                <p className="homepage__details">Our tested and proven approach to get you where you want to be.</p>
            </div>
            <ImageGallery slides={slides} />
        </div>
        <Buildyourbody/>   
       
    <Amenities></Amenities>
    <Banner></Banner>
        </>
    )
}

export default HomePage;