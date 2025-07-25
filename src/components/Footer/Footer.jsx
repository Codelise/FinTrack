import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/PrivacyPolicy">Privacy Policy</Link>
        <Link to="/TermsOfService">Terms of Service</Link>
        <Link to="/ContactUs">Contact Us</Link>
      </div>
      <p className="footer-copy">© 2025 FinTrack. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
