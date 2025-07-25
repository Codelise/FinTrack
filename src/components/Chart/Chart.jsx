import React from "react";
import "./Chart.css";

const Chart = () => (
  <div className="chart-wrapper">
    <div className="chart-card">
      <p className="chart-title">Expenses by Category</p>
      <div className="category-bars">
        <div className="bar" style={{ height: "80%" }}></div>
        <p className="bar-label">Food</p>
        <div className="bar" style={{ height: "90%" }}></div>
        <p className="bar-label">Rent</p>
        <div className="bar" style={{ height: "10%" }}></div>
        <p className="bar-label">Utilities</p>
        <div className="bar" style={{ height: "60%" }}></div>
        <p className="bar-label">Transportation</p>
        <div className="bar" style={{ height: "10%" }}></div>
        <p className="bar-label">Entertainment</p>
      </div>
    </div>
    <div className="chart-card">
      <p className="chart-title">Budget Adherence Over Time</p>
      <div className="budget-chart-area">
        <svg
          width="100%"
          height="148"
          viewBox="-3 0 478 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z"
            fill="url(#paint0_linear_1131_5935)"
          ></path>
          <path
            d="M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25"
            stroke="#90aecb"
            strokeWidth="3"
            strokeLinecap="round"
          ></path>
          <defs>
            <linearGradient
              id="paint0_linear_1131_5935"
              x1="236"
              y1="1"
              x2="236"
              y2="149"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#223649"></stop>
              <stop offset="1" stopColor="#223649" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
        </svg>
        <div className="budget-chart-labels">
          <p>Jan</p>
          <p>Feb</p>
          <p>Mar</p>
          <p>Apr</p>
          <p>May</p>
          <p>Jun</p>
        </div>
      </div>
    </div>
  </div>
);

export default Chart;
