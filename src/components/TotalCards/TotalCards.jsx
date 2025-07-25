import React from "react";
import "./TotalCards.css";

const TotalCards = () => {
  return (
    <>
      <div className="total-cards-container">
        <div className="total-card">
          <p className="total-card-title">Total Income</p>
          <p className="total-card-value">$12,500</p>
          <p className="total-card-percentage positive">+15%</p>
        </div>
        <div className="total-card">
          <p className="total-card-title">Total Expenses</p>
          <p className="total-card-value">$8,200</p>
          <p className="total-card-percentage negative">+10%</p>
        </div>
        <div className="total-card">
          <p className="total-card-title">Net Savings</p>
          <p className="total-card-value">$4,300</p>
          <p className="total-card-percentage positive">+25%</p>
        </div>
      </div>
    </>
  );
};

export default TotalCards;
