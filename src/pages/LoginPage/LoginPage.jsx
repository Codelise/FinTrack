import React from "react";
import { Link } from "react-router-dom";
import HeaderLogin from "../../components/HeaderLogin/HeaderLogin";
import InputField from "../../components/InputField/InputField";
import CheckBox from "../../components/CheckBox/CheckBox";
import Button from "../../components/Button/Button";
import SocialLoginButton from "../../components/SocialLoginButton/SocialLoginButton";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <>
      <div className="login-page">
        <HeaderLogin />

        <div className="login-card">
          <h1 className="login-title">Welcome Back</h1>

          <form className="login-form">
            <InputField
              label="Username or Email"
              type="text"
              id="username"
              placeholder="Enter your username or email"
            />

            <InputField
              label="Password"
              type="password"
              id="password"
              placeholder="Enter your password"
            />

            <div className="login-options">
              <CheckBox label="Remember Me" />
              <Link to="/dashboard">
                <Button>Log In</Button>
              </Link>
              <Link to="/ForgotPassword">
                <p className="forgot-link">Forgot Password?</p>
              </Link>
            </div>

            <div className="divider">Or continue with</div>

            <SocialLoginButton />
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
