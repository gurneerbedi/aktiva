import "./Buildyourbody.scss";
import TransformImg from "../../assets/images/transformingman.png";
import Slider from "../Slider/Slider.jsx";
import transformingManBefore from "../../assets/images/transformingmanbefore.png";
import transformingManAfter from "../../assets/images/transformingmanafter.png";
import {Link} from "react-router-dom";

const Buildyourbody = () => {
  return (
    <>
      <div className="build">
        <div className="build__text">
        <h1 className="build__heading">
          BUILD YOUR <span className="highlight">BODY</span>
          <br /> TRANSFORM YOUR <span className="highlight">LIFE</span>
        </h1>
        <p className="build__paragraph">
          We're not just another "private training" studio that throws you into
          the ring and has you run endless repetitive circuits. We've broken
          down the whole thing to a science and we take the time to carefully
          understand your unique needs and goals, and then we craft a customized
          experience tailored specifically to you. We look at many different
          factors, from your nutrition intake and diet to any injuries or
          limitations, our expert trainers are experienced to calculate all that
          into your regime and workout plans. Just like our preferences in
          clothes, food, and drinks, we're all different, and what works for one
          person might not work for another. That's why we believe there's no
          "one size fits all" approach when it comes to your fitness journey.
        </p>
        <p className="build__paragraph">
          Our focus is on discovering your strengths and weaknesses, then
          building a plan around them to make your progress both effective and
          sustainable. We hold all our clients accountable and will never give
          up on you, as long as you don't give up on us. Your health is the
          foundation for a long and fulfilling life, and we take that
          responsibility seriously. Sometimes, all we need is that extra push --
          and we're here to give it to you. We understand that reaching your
          goals alone isn't always easy, but with the right guidance, support,
          and accountability, anything is possible. Teamwork makes the
          dreamwork!
        </p>
        <p className="build__sentence">
          Let's work together to make your goals a reality!
        </p>
       <Link to="/programs" className="build__button">
  Read More About Aktiva
</Link>
        </div>

        < Slider
      beforeImg= {transformingManBefore}
      afterImg={transformingManAfter}
    />
  
</div>
      
    </>
  );
};

export default Buildyourbody;
