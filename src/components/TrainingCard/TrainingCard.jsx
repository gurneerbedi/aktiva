import React from "react";
import "./TrainingCard.scss";

const TrainingCard = ({ title, description, price, features, buttonText }) => {
  return (
    <div className="training-card">
      <h2 className="training-card__title">{title}</h2>
      <p className="training-card__description">{description}</p>
      <p className="training-card__price">${price}</p>
      <ul className="training-card__features">
        {features.map((feature, index) => (
          <li key={index} className="training-card__feature">
            {feature}
          </li>
        ))}
      </ul>
      <button className="training-card__button">{buttonText}</button>
    </div>
  );
};

export default TrainingCard;
