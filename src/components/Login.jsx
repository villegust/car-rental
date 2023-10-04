import React from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { faSquareFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import Google from "../images/Accounts/google-login.png";

function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/");
  };

  return (
    <>
      <section className="login-section">
        <div className="login-content">
          <div className="login-content__title">
            <h2>Login</h2>
          </div>
          <div className="login-content__container">
            <div className="login-content__login-with">
              <div className="login-content__login__icon">
                <FontAwesomeIcon
                  icon={faSquareFacebook}
                  size="2xl"
                  style={{ color: "#fff" }}
                />
              </div>
              <button id="facebook">Facebook</button>
            </div>

            <div className="login-content__login-with">
              <div className="login-content__login__icon">
                <img src={Google} alt="" />
              </div>
              <button id="google">Google</button>
            </div>
          </div>
          <div className="login-content__login">
            <div className="login-content__login__icon">
              <FontAwesomeIcon
                icon={faUser}
                size="2xl"
                style={{ color: "#fff" }}
              />
            </div>
            <input type="text" name="" id="" placeholder="Username" />
          </div>
          <div className="login-content__login">
            <div className="login-content__login__icon">
              <FontAwesomeIcon
                icon={faLock}
                size="2xl"
                style={{ color: "#fff" }}
              />
            </div>
            <input type="password" name="" id="" placeholder="Password" />
            <a href="">Forgot password?</a>
          </div>
          <div className="login-content__login__loginBtn">
            <button onClick={handleLogin}>Login</button>
          </div>
          <div className="register">
            <span>
              Don't have a account? <a href="/register">Register</a>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
