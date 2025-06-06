import "./Banner.scss";
import BannerImg from "../../assets/images/BannerImg.png";
import DumbellsImg from "../../assets/images/Dumbells.png";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="banner__header">
          <div className="banner__heading">
          <h1 className="banner__heading-text">
            LET'S START YOUR FITNESS 
          </h1>
           <h1 className="banner__heading-text">
            JOURNEY TOGETHER!
          </h1>
          </div>
                  <a
        href="https://aktiva.gymmasteronline.com/portal/login"
        className="banner__heading-button"
        target="_blank"
        rel="noopener noreferrer"
      >Start Your Training Today</a>
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
