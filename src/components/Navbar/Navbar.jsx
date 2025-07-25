import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../../assets/logo.svg";
import Button from "../Button/Button";
import "./Navbar.css";

const Navbar = ({ onProfileClick }) => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <LogoIcon className="logo-icon" />
          <h2 className="logo-text">FinTrack</h2>
        </div>

        <div className="navbar-links">
          <ul className="ul-links">
            <Link to="/dashboard">
              <li>Dashboard</li>
            </Link>
            <Link to="/Transactions">
              <li>Transaction</li>
            </Link>
            <Link to="/Budgets">
              <li>Budgets</li>
            </Link>
            <Link to="/Reports">
              <li>Reports</li>
            </Link>
          </ul>
          <Link to="/notifications">
            <Button className="notification-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20px"
                height="20px"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z" />
              </svg>
            </Button>
          </Link>
          <div
            onClick={onProfileClick}
            role="button"
            tabIndex={0}
            aria-label="Open profile sidebar"
            style={{ cursor: "pointer", display: "inline-block" }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") onProfileClick();
            }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="avatar"
                  patternUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <image
                    href="https://lh3.googleusercontent.com/aida-public/AB6AXuBtSzSFuxAwoo3R2KmSujtnml82RPMAruHLxrh_iIpxPxtEMKmof6ofymD9GP5X-WsZ4ZGADtedd2kh55wHRU2mrpAyh-TGDZPF6B5zqsb3T8o93WWfr2QrHw0-LdYIoySaVT96wW5_3ShXD0tUSEYtV4vkuBCyIuzpO5pmYTMrM6RtNYgBE5yVnl6YLZEBzipiPK6XTyQSfuUwOsKU7wEnIa4VR0oCFn26nAdRF4VXRVJaMcAYr6AXUMQ7PHM2O86NGobtP-Qbitk"
                    x="0"
                    y="0"
                    width="40"
                    height="40"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </pattern>
              </defs>
              <circle cx="20" cy="20" r="20" fill="url(#avatar)" />
            </svg>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
