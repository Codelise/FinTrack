import React from "react";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import { ReactComponent as ChartLineIcon } from "../../assets/ChartLine.svg";
import { ReactComponent as TargetIcon } from "../../assets/Target.svg";
import { ReactComponent as ShieldCheckIcon } from "../../assets/ShieldCheck.svg";
import "./FeaturesSection.css";

const FeatureSection = () => {
  return (
    <section className="features-section-container">
      <div className="features-header">
        <h1 className="features-title">Key Features</h1>
        <p className="features-subtitle">
          Explore the powerful tools that FinTrack offers to help you manage
          your finances effectively.
        </p>
      </div>
      <div className="features-grid">
        <FeatureCard icon={<ChartLineIcon />} title="Expense Tracking">
          Easily monitor your daily expenses and categorize your spending to
          understand where your money goes.
        </FeatureCard>
        <FeatureCard icon={<TargetIcon />} title="Goal Setting">
          Set personalized financial goals, track your progress, and stay
          motivated to achieve your targets.
        </FeatureCard>
        <FeatureCard icon={<ShieldCheckIcon />} title="Secure & Private">
          Your data is protected with top-notch security measures, ensuring your
          financial information remains private and safe.
        </FeatureCard>
      </div>
    </section>
  );
};

export default FeatureSection;
