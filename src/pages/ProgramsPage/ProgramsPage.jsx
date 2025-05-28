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


import GreenCard from "../../components/GreenCard/GreenCard.jsx";




function ProgramsPage() {
  return (
    <div className="programs">
      <div
        style={{
          display: "flex",
          gap: "2rem",
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
      <GreenCard/>
    </div>
  );
}

export default ProgramsPage;
