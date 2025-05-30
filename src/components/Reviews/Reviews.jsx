import { useEffect } from "react";
import "./Reviews.scss"

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

  return <div className="reviews__container"id="shapo-widget-d510b8a52b3ff4037e28"></div>;
};

export default Reviews;
