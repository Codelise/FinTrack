import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { ReactComponent as LogoIcon } from "../../assets/logo.svg"; // We'll create this SVG file
import "./Header.css";

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo-container">
        <LogoIcon className="logo-icon" />
        <h2 className="logo-text">FinTrack</h2>
      </div>
      <div className="nav-container">
        <nav className="nav-links">
          <Link to="#">Features</Link>
          <Link to="#">Pricing</Link>
          <Link to="#">Support</Link>
        </nav>
        <Link to="/login">
          <Button>Sign Up</Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
