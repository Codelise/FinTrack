import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./CTASection.css";

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-content">
        <h1 className="cta-title">Ready to Transform Your Financial Future?</h1>
        <p className="cta-subtitle">
          Join thousands of users who are already benefiting from FinTrack's
          intuitive and effective budgeting tools.
        </p>
        <Link to="/CreateAccount">
          <Button>Sign Up Now</Button>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
