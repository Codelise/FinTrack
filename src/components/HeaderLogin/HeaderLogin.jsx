import React from "react";
import { ReactComponent as LogoIcon } from "../../assets/logo.svg";
import "./HeaderLogin.css";

const HeaderLogin = () => {
  return (
    <div className="login-header">
      <div className="logo-container">
        <LogoIcon className="logo-icon" />
        <h2 className="logo-text">FinTrack</h2>
      </div>
    </div>
  );
};

export default HeaderLogin;
