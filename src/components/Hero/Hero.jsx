
import "./Hero.scss"; 

const Hero = ({ backgroundImg, title }) => {
  return (
    <div className="hero-section" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="hero-section__overlay">
        <h1 className="hero-section__title">{title}</h1>
      </div>
    </div>
  );
};

export default Hero;
