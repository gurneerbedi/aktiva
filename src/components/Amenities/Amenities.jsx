import "./Amenities.scss";
import Gym from "../../assets/images/gym.png";
import Weights from "../../assets/images/weights.png";
import Spa from "../../assets/images/spa.png";
import Snack from "../../assets/images/snack.png";

const Amenities = () => {
  return (
    <div className="amenities">
      <h1 className="amenities__heading">
        OUR <span className="highlight">AMENITIES</span>
      </h1>
      <p className="amenities__subheading">
        Explore Our Top-Notch Amenities:{" "}
        <span>Designed for Your Comfort and Success</span>
      </p>

      <div className="amenities__card">
        <div className="amenities__card-img-wrapper">
          <div className="amenities__card-img">
            <img src={Gym} alt="gym" />
          </div>
        </div>
        <h2 className="amenities__card-heading">BOUTIQUE STUDIO</h2>
        <p className="amenities__card-desp">
          Step into our clean, luxurious studio, where fitness meets community.
          A space designed for individuals who are driven, focused, and
          supportive — surrounded by like-minded people on the same journey.
        </p>
      </div>

      <div className="amenities__card">
        <div className="amenities__card-img-wrapper">
          <div className="amenities__card-img">
            <img src={Weights} alt="gym" />
          </div>
        </div>
        <h2 className="amenities__card-heading">PREMIUM EQUIPMENT</h2>
        <p className="amenities__card-desp">
          Train with Top-of-the-Line Equipment. Full gym with everything you
          would need to excel in your journey.
        </p>
      </div>

      <div className="amenities__card">
        <div className="amenities__card-img-wrapper">
          <div className="amenities__card-img">
            <img src={Spa} alt="gym" />
          </div>
        </div>
        <h2 className="amenities__card-heading">SPA ROOM</h2>
        <p className="amenities__card-desp">
          Relax and rejuvenate in our spa room, featuring massage chairs, red
          light therapy, and other treatments designed to enhance your recovery
          and help you look and feel your best throughout your fitness journey.
        </p>
      </div>

      <div className="amenities__card">
        <div className="amenities__card-img-wrapper">
          <div className="amenities__card-img">
            <img src={Snack} alt="gym" />
          </div>
        </div>
        <h2 className="amenities__card-heading">ON-SITE SNACK BAR</h2>
        <p className="amenities__card-desp">
          Fuel your workout with our on-site snack bar, offering a variety of
          healthy, quick snacks and shakes designed to support & enhance your
          fitness goals. Luxurious dining area to finish off some work or just
          enjoy your snacks and have a chat with friends.
        </p>
      </div>

      <button className="amenities__button">Book a Visit</button>
    </div>
  );
};

export default Amenities;
