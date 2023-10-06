import React from "react";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../images/Logo/Logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    if (nav === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [nav]);

  const openNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav>
        {/* mobile navbar */}

        <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
          <div onClick={openNav} className="mobile-navbar__close">
            <FontAwesomeIcon icon={faX} />
          </div>
          <ul className="mobile-navbar__links">
            <li>
              <Link className="home-link" to="/">
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link className="about-link" to="/about">
                About
              </Link>
            </li>
            <li>
              {" "}
              <Link className="models-link" to="/models">
                Vehicle Models
              </Link>
            </li>
            <li>
              {" "}
              <Link className="team-link" to="/team">
                Our Team
              </Link>
            </li>
            <li>
              {" "}
              <Link className="contact-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>

          <div className="mobile-navbar__buttons">
            <Link className="mobile-navbar__buttons__sign-in" to="/login">
              Log In
            </Link>
            <Link className="mobile-navbar__buttons__register" to="/register">
              Register
            </Link>
          </div>
        </div>

        {/* desktop navbar */}
        <div className="navbar">
          <div className="navbar__img">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={Logo} alt="logo-img" />
            </Link>
          </div>
          <ul className="navbar__links">
            <li>
              <Link className="home-link" to="/">
                Home
              </Link>
            </li>
            <li>
              {" "}
              <Link className="about-link" to="/about">
                About
              </Link>
            </li>
            <li>
              {" "}
              <Link className="models-link" to="/models">
                Vehicle Models
              </Link>
            </li>
            <li>
              {" "}
              <Link className="team-link" to="/team">
                Our Team
              </Link>
            </li>
            <li>
              {" "}
              <Link className="contact-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="navbar__buttons">
            <Link className="navbar__buttons__sign-in" to="/login">
              Log In
            </Link>
            <Link className="navbar__buttons__register" to="/register">
              Register
            </Link>
          </div>

          <div onClick={openNav} className="hamburger-menu">
            <FontAwesomeIcon icon={faBars} size="xl" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
