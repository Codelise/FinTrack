import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./HeroSection.css";

const heroImageUrl =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBvVOXCrMDBoVcY5ch79dxf-KI5zRvWYJd0n1v71AC8xiRIu8uHmcb8S5vnePevKw_1ofNI75PUwjPFUJSbBftg4LubYrsi7rM7T-Jq8_sf6n27jriIwErVilv9EU8NA66T_BEddA_McLskk2GoNPkuv-3AiuJ_oHDm9eZbLD6W1ANhENy6duYKJ5ujl2SoZNP9WHft5tNh-IfMY-VNsY6kv9T9mwLei3XbJEZCKilXomJa2tHGVIlv-Pos6YpZU1jzDl_AXKIt_wo";

const HeroSection = () => {
  return (
    <div
      className="hero-container"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("${heroImageUrl}")`,
      }}
    >
      <div className="hero-content">
        <h1 className="hero-title">Take Control of Your Finances</h1>
        <h2 className="hero-subtitle">
          Fintrack helps you track your spending, set financial goals, and
          achieve financial freedom with ease.
        </h2>
      </div>
      <Link to="/CreateAccount">
        <Button>Get Started</Button>
      </Link>
    </div>
  );
};

export default HeroSection;
