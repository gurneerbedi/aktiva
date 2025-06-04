// src/components/GreenCard.jsx
import React from "react";
import "./GreenCard.scss";

const GreenCard = ({}) => {
  return (
    <>
      <div className="green-card">
        <div className="green-card__header">
          <h1 className="green-card__heading">BOTH PACKAGES </h1>
          <h1 className="green-card__heading">INCLUDE </h1>
        </div>
        <div className="green-card__desp">
          <p className="green-card__desp-item">Unlimited sessions</p>
          <p className="green-card__desp-item">
            Personalized Training according to each client's needs
          </p>

          <p className="green-card__desp-item">
            Nutrition plan (VIP program has more personalized options)
          </p>

          <p className="green-card__desp-item">
            Monitoring client achievements at every stage to assess
            effectiveness and maintain high motivation
          </p>
        </div>
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 380 250"
          preserveAspectRatio="xMidYMid meet"
          className="green-card__svg"
        >
          <path
            d="M0 0 C0.33 0 0.66 0 1 0 C1.08636719 0.85980469 1.17273438 1.71960938 1.26171875 2.60546875 C3.35291523 20.19837861 10.27929919 34.48402959 24 46 C39.38604116 56.91912599 55.23048854 58.15634872 73.47834778 58.13130188 C74.92964363 58.13300695 76.38093901 58.13515796 77.83223361 58.13771313 C80.97257541 58.1422864 84.11289756 58.14373567 87.25324249 58.14274788 C92.3643063 58.14114714 97.47535078 58.14637422 102.58641052 58.15237427 C110.00724596 58.16046929 117.42807798 58.16542485 124.84891701 58.16866493 C136.58562787 58.17417561 148.32230989 58.19108688 160.05900574 58.21000671 C164.0789804 58.21636268 168.09895513 58.22267121 172.11892986 58.22898388 C173.62569651 58.23135952 173.62569651 58.23135952 175.1629029 58.23378316 C186.58556927 58.25170311 198.00823766 58.26793813 209.4309082 58.28295898 C210.47453955 58.28433486 211.5181709 58.28571073 212.59342744 58.28712829 C229.50690767 58.30906023 246.42038042 58.31981596 263.33387236 58.32732973 C280.71726598 58.33540798 298.10059562 58.35871907 315.4839527 58.3952834 C326.19607724 58.41727211 336.90807008 58.42698418 347.62021603 58.42078307 C354.96398657 58.41760224 362.3076448 58.42897969 369.65138058 58.45167748 C373.88392277 58.46431051 378.11621464 58.47055723 382.34876633 58.45926094 C386.23079841 58.4490336 390.11234627 58.45746183 393.99432155 58.4801239 C395.39127631 58.48508546 396.7882752 58.4834535 398.18520806 58.47419123 C415.97321553 58.36561288 430.58890162 63.85035645 443.30078125 76.234375 C484.11512659 118.05283592 460 217.60381708 460 250 C308.2 250 156.4 250 0 250 C0 167.5 0 85 0 0 Z "
            fill="#000000"
            transform="translate(0,0)"
          />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
            fontSize="21"
            fontFamily="Saira"
            font-weight="400"
            
          >
            <tspan x="50%" dy="0">
              Guaranteed fast, lasting results that{" "}
            </tspan>
            <tspan x="50%" dy="1.5em">
              reveal your true potential. Trust in{" "}
            </tspan>
            <tspan x="50%" dy="1.5em">
              the Aktiva process and we will show{" "}
            </tspan>
            <tspan x="50%" dy="1.5em">
              you true results!
            </tspan>
          </text>
        </svg>
      </div>
    </>
  );
};

export default GreenCard;
