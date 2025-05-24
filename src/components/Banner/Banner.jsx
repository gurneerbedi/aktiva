import "./Banner.scss";
import BannerImg from "../../assets/images/BannerImg.png";
import DumbellsImg from "../../assets/images/Dumbells.png";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="banner__header">
          <h1 className="banner__heading">
            LET'S START YOUR FITNESS JOURNEY TOGETHER!
          </h1>
          <button className="banner__heading-button">Start Your Training Today</button>
        </div>
        <div className="banner__images">
          
          <div className="banner__heroimg">
            <img src={BannerImg} alt="man and woman posing" />
          </div>
          <div className="banner__dumbbells">
            <img src={DumbellsImg} alt="weights" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
