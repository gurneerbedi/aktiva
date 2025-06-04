import { useEffect } from "react";
import "./Reviews.scss"
import reviewsimg from "../../assets/images/reviewsimg.jpg";

const Reviews = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.id = "shapo-embed-js";
    script.src = "https://cdn.shapo.io/js/embed.js";
    script.type = "text/javascript";
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      const existingScript = document.getElementById("shapo-embed-js");
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return <>
  <div className="reviews">
    <h2 className="reviews__heading">WHAT <span className="highlight">CLIENTS </span>SAY</h2>
    <img  src={reviewsimg} alt="gym img " />
  </div>
  <div className="reviews__container"id="shapo-widget-d510b8a52b3ff4037e28"></div>;
  <div className="reviews__bottom"></div>
  </>
};

export default Reviews;
