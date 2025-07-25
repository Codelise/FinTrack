import React from "react";
import "./FeatureCard.css";

const FeatureCard = ({ icon, title, children }) => {
  return (
    <div className="feature-card">
      <div className="icon-container">{icon}</div>
      <div className="text-container">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{children}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
