import "./ProgramsPage.scss";
import TrainingCard from "../../components/TrainingCard/TrainingCard.jsx";

function ProgramsPage() {
  return (
    <>
    <div className="programs">
    <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap", justifyContent: "center", padding: "30px"}}>
      <TrainingCard
        title="SEMI-PRIVATE TRAINING"
        price="89.99 Weekly"
        description="Personalized Training in a small group"
        features={[
          "Unlimited sessions",
          "Exclusive access to a dedicated spa room",
          "Monthly In-body analysis",
          "Monthly metrics tracking",
          "Monthly free protein shake",
          "Two guest passes per month",
        ]}
        buttonText="Join Now"
      />

      <TrainingCard
        title="VIP-Private Training"
        price="187.99"
        features={[
          "1-on-1 personal training",
          "3 sessions per week",
          "Full nutrition guidance",
          "Aktiv app + metrics tracking",
          "Total accountability plan",
        ]}
        buttonText="Join Now"
      />
    </div>
    </div>
    </>
  );
}

export default ProgramsPage;
