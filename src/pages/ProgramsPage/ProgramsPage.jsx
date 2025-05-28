import "./ProgramsPage.scss";
import TrainingCard from "../../components/TrainingCard/TrainingCard.jsx";
import Infinity from "../../assets/images/infinity.png"
import Chair from "../../assets/images/chair.png"
import Shake from "../../assets/images/protein-shake.png"
import Pass from "../../assets/images/boarding-pass.png"
import Workout from "../../assets/images/workout.png"
import Snack from "../../assets/images/snackicon.png"
import Slimbody from "../../assets/images/slim-body.png"
import Diet from "../../assets/images/diet.png"
import Spa from "../../assets/images/spa.png"
import Restricted from "../../assets/images/restricted.png"
import Clean from "../../assets/images/clean.png"
import GreenCard from "../../components/GreenCard/GreenCard.jsx";




function ProgramsPage() {
  return (
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
        <TrainingCard
          title="SEMI-PRIVATE TRAINING"
          price="89.99 Weekly"
          description="Personalized Training in a small group."
          features={[
            { text: "Unlimited sessions", icon: Infinity },
            { text: "Exclusive spa room access", icon: Chair},
            { text: "Monthly In-body analysis", icon: Slimbody },
            { text: "Monthly free protein shake", icon: Shake},
            { text: "Two guest passes per month", icon: Pass},
          ]}
          buttonText="Purchase Plan"
        />
          <TrainingCard
          title="VIP-PRIVATE TRAINING"
          price="187.99 Weekly"
          description="Exclusive, tailored fitness just for you."
          features={[
            { text: "Tailored fitness journey and schedule", icon: Workout },
            { text: "Spa room access with two free body sculpting sessions per month", icon: Spa},
            { text: "Bi-Monthly In-body analysis", icon: Slimbody },
            { text: "Weekly free protein shake and snack", icon: Snack},
            { text: "Tailored meal plan", icon: Diet},
          ]}
          buttonText="Purchase Plan"
        />
      </div>

      <div className="package__wrapper">
        <div className="package__container">
          <h2 className="package__heading">AKTIVA 3-MONTH FIT JOURNEY PACKAGE</h2>
          <p className="package__description">For those determined to make a big change!</p>
          <p className="package__description">Introducing our 3-Month Fitness Transformation Package. This program is designed to help you acheive remarkable results and instill lasting lifestyle changes. </p>
          <p className="package__description">This package includes everything from our VIP Private training package bundled into a more cost-effective and dynamic program for rapid results. We will all work toegther and not give up until changes are made! Sometimes it's just that little push we need.</p>
          <div className="package__purchase">
          <p className="package__price">$1899.99</p>
          <button className="package__button">Purchase Plan</button>
          </div>
          </div>
        </div>
        <div className="asset__wrapper">
          <h2 className="asset__heading">THE ONE ASSET YOU CAN'T REPLACE</h2>
          <div className="asset__container"><img className= "asset__icon"src={Restricted} alt="restricted icon" />
          <p className="asset__description">No more waiting around to use machines</p></div>
           <div className="asset__container"><img className= "asset__icon"src={Clean} alt="clean icon" />
          <p className="asset__description">Clean and well-maintained facility. Top of the line equipment.</p></div>
        </div>

      

    </div>
  );
}

export default ProgramsPage;
