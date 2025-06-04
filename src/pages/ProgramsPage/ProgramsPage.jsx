import "./ProgramsPage.scss";
import TrainingCard from "../../components/TrainingCard/TrainingCard.jsx";
import Infinity from "../../assets/images/infinity.png";
import Chair from "../../assets/images/chair.png";
import Shake from "../../assets/images/protein-shake.png";
import Pass from "../../assets/images/boarding-pass.png";
import Workout from "../../assets/images/workout.png";
import Snack from "../../assets/images/snackicon.png";
import Slimbody from "../../assets/images/slim-body.png";
import Diet from "../../assets/images/diet.png";
import Spa from "../../assets/images/spa.png";
import Restricted from "../../assets/images/restricted.png";
import Clean from "../../assets/images/clean.png";
import Gps from "../../assets/images/gps.png";
import Playbutton from "../../assets/images/play-button.png";
import GreenCard from "../../components/GreenCard/GreenCard.jsx";
import background from "../../assets/images/programsbackground.jpeg";
import Hero from "../../components/Hero/Hero.jsx";
import imgright from "../../assets/images/programsleft.jpeg";
import imgleft from "../../assets/images/imgright.jpeg";



function ProgramsPage() {
  return (
    <>
     <Hero
        backgroundImg={background}
        title="PROGRAMS"
        showOverlay={true}
        overlayOpacity={0.72}  
        overlayColor="0, 0, 0" 
      />
    <div className="programs">
      <div
        style={{
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
          justifyContent: "center",
          padding: "30px",
        }}
      >
        <div className="programs__cards">
        <TrainingCard
          title="SEMI-PRIVATE TRAINING"
          price="$89.99"
          frequency="Weekly"
          description="Personalized Training in a small group."
          features={[
            { text: "Unlimited sessions", icon: Infinity },
            { text: "Exclusive spa room access", icon: Chair },
            { text: "Monthly In-body analysis", icon: Slimbody },
            { text: "Monthly free protein shake", icon: Shake },
            { text: "Two guest passes per month", icon: Pass },
          ]}
          buttonText="Purchase Plan"
        />
        <GreenCard/>
        <TrainingCard
          title="VIP-PRIVATE TRAINING"
          price="$187.99"
          frequency="Weekly"
          description="Exclusive, tailored fitness just for you."
          features={[
            { text: "Tailored fitness journey and schedule", icon: Workout },
            {
              text: "Spa room access with two free body sculpting sessions per month",
              icon: Spa,
            },
            { text: "Bi-Monthly In-body analysis", icon: Slimbody },
            { text: "Weekly free protein shake and snack", icon: Snack },
            { text: "Tailored meal plan", icon: Diet },
          ]}
          buttonText="Purchase Plan"
        />
      </div>
      </div>

      <div className="package__wrapper">
        <img src={imgleft}alt="" className="package__bg-img left" />
  <img src={imgright} alt="" className="package__bg-img right"/>
        <div className="package__container">
          <h2 className="package__heading">
            AKTIVA <span className="highlight">3-MONTH</span> FIT JOURNEY PACKAGE
          </h2>
          <p className="package__description">
            For those determined to make a big change!
          </p>
          <p className="package__description">
            Introducing our 3-Month Fitness Transformation Package. This program
            is designed to help you acheive remarkable results and instill
            lasting lifestyle changes.{" "}
          </p>
          <p className="package__description">
            This package includes everything from our VIP Private training
            package bundled into a more cost-effective and dynamic program for
            rapid results. We will all work together and not give up until
            changes are made! Sometimes it's just that little push we need.
          </p>
          <div className="package__purchase">
            <p className="package__price">$1899.99</p>
            <button className="package__button">Purchase Plan</button>
          </div>
        </div>
      </div>
      <div className="asset__wrapper-container">
      <div className="asset__wrapper">
        <h2 className="asset__heading">THE <span className="highlight">ONE ASSET</span> YOU CAN'T REPLACE</h2>
        <div className="asset__container">
          <img className="asset__icon" src={Restricted} alt="restricted icon" />
          <p className="asset__description">
            No more waiting around to use machines
          </p>
        </div>
        <div className="asset__container">
          <img className="asset__icon" src={Clean} alt="clean icon" />
          <p className="asset__description">
            Clean and well-maintained facility. Top of the line equipment.
          </p>
        </div>
      </div>

      <div className="standard__wrapper">
        <div className="standard__container">
          <h2 className="standard__heading">STANDARD GYM MEMBERSHIP</h2>
          <p className="standard__description">Workout on your own terms.</p>
          <div className="standard__price">
            <p className="standard__price-value">$17.99</p>
            <p className="standard__price-freq">Weekly</p>
          </div>
          <ul className="standard__list">
            <li className="standard__list-item">Unlimited gym access</li>
            <li className="standard__list-item">
              Members can choose their preferred workout style and routine
            </li>
            <li className="standard__list-item">No long-term commitments</li>
            <li className="standard__list-item">
              Affordable month-to-month option
            </li>
            <li className="standard__list-item">Two guest passes per month</li>
          </ul>
          <div className="standard__button-wrapper">
            <button className="standard__button">Purchase Plan</button>
          </div>
        </div>
      </div>

      <div className="asset__wrapper">
        <div className="asset__container">
          <img className="asset__icon" src={Gps} alt="gps icon" />
          <p className="asset__description">
            A one stop fitness destination designed to support every step of
            your journey -train, recover, and recharge, all under one roof.
          </p>
        </div>
        <div className="asset__container">
          <img className="asset__icon" src={Playbutton} alt="video icon" />
          <p className="asset__description">
            No more watching endless online training videos & using dull,
            repetitive Apps. Get real results with real people.
          </p>
        </div>
      </div>
      </div>

      <div className="contract__wrapper">
        <h2 className="contract__heading">NO ENROLLMENT OR <span className="highlight">CONTRACT FEES!</span></h2>
        <p className="contract__description">
          None of that commercial gym bullsh*t!
        </p>
        <p className="contract__description">
          We're not here to waste your time with technical and complicated
          contract jargon. We have one goal in mind and that's to keep your mind
          stress free and to keep your body active, allowing you to concentrate
          on what truly matters!
        </p>
        <p className="contract__description">
          That being said, we're happy to offer discounts and improved rates for
          those who are truly invested and serious towards their fitness journey
          and wanting to proceed with a commitment period at a better price.
        </p>
        <p className="contract__description">
          This commitment allows us to provide more affordable options for you.
          No need to worry though, our contacts are flexible and stress-free and
          can be adjusted as you go! We offer certain amount of membership
          freezes and holds per term to allow for any unexpected or upcoming
          plans. Just give us a shout and we'll make it work for you!
        </p>
      </div>
    </div>
    </>
  );
}

export default ProgramsPage;
