import React from "react";
import "./TrainingCard.scss";

const TrainingCard = ({
  title,
  description,
  price,
  frequency,
  features,
  buttonText,
  customIconMode = false, 
}) => {
  return (
    <div className="training-card">
      <h2 className="training-card__title">{title}</h2>
      <p className="training-card__description">{description}</p>

      <div className="training-card__price">
        <p className="training-card__price-value">{price}</p>
        <p className="training-card__price-freq">{frequency}</p>
      </div>

      <ul className="training-card__features">
        {features.map((feature, index) => (
          <li key={index} className="training-card__feature">
            {customIconMode ? (
              feature.icon 
            ) : (
              <div className="training-card__icon-wrapper">
                <img
                  src={feature.icon}
                  alt=""
                  className="training-card__icon"
                  aria-hidden="true"
                />
              </div>
            )}
            <span>{feature.text}</span>
          </li>
        ))}
      </ul>

      <a
        href="https://aktiva.gymmasteronline.com/portal/login"
        className="training-card__button"
        target="_blank"
        rel="noopener noreferrer"
      >
        {buttonText}
      </a>
    </div>
  );
};

export default TrainingCard;
