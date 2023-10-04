import React from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { faSquareFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import Google from "../images/Accounts/google-login.png";

function Register() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/");
  };

  return (
    <>
      <section className="register-section">
        <div className="register-content">
          <div className="register-content__title">
            <h2>Register</h2>
          </div>
          <div className="register-content__container">
            <div className="register-content__register-with">
              <div className="register-content__register__icon">
                <FontAwesomeIcon
                  icon={faSquareFacebook}
                  size="2xl"
                  style={{ color: "#fff" }}
                />
              </div>
              <button id="facebook">Facebook</button>
            </div>

            <div className="register-content__register-with">
              <div className="register-content__register__icon">
                <img src={Google} alt="" />
              </div>
              <button id="google">Google</button>
            </div>
          </div>

          <div className="register-content__register">
            <div className="register-content__register__icon">
              <FontAwesomeIcon
                icon={faUser}
                size="2xl"
                style={{ color: "#fff" }}
              />
            </div>
            <input type="text" name="" id="" placeholder="Name" />
          </div>

          <div className="register-content__register">
            <div className="register-content__register__icon">
              <FontAwesomeIcon
                icon={faUser}
                size="2xl"
                style={{ color: "#fff" }}
              />
            </div>
            <input type="text" name="" id="" placeholder="Username" />
          </div>

          <div className="register-content__register">
            <div className="register-content__register__icon">
              <FontAwesomeIcon
                icon={faUser}
                size="2xl"
                style={{ color: "#fff" }}
              />
            </div>
            <input type="text" name="" id="" placeholder="Email" />
          </div>

          <div className="register-content__register">
            <div className="register-content__register__icon">
              <FontAwesomeIcon
                icon={faLock}
                size="2xl"
                style={{ color: "#fff" }}
              />
            </div>
            <input type="password" name="" id="" placeholder="Password" />
          </div>

          <div className="register-content__register">
            <div className="register-content__register__icon">
              <FontAwesomeIcon
                icon={faLock}
                size="2xl"
                style={{ color: "#fff" }}
              />
            </div>
            <input
              type="password"
              name=""
              id=""
              placeholder="Enter your password again"
            />
          </div>

          <div className="register-content__register__registerBtn">
            <button onClick={handleRegister}>Register</button>
          </div>
          <div className="register">
            <span>
              Already have a account <a href="/login">Login</a>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
