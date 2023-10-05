import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>Exclusive</span> Car Rental
              </li>
              <li>
                We provide an extensive selection of vehicles to suit to your
                every driving requirement, ensuring we have the ideal car to
                suit your needs
              </li>
              <li>
                <a href="tel:123456789">
                  <FontAwesomeIcon icon={faPhoneVolume} /> (123)-456-789
                </a>
              </li>
              <li>
                <a href="mailto:carrental@gmail.com">
                  <FontAwesomeIcon icon={faEnvelope} /> carrental@gmail.com
                </a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Company</li>
              <li>
                <a href="#home">Uppsala</a>
              </li>
              <li>
                <a href="#home">Careers</a>
              </li>
              <li>
                <a href="#home">Blog</a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Working Hours</li>
              <li>Mon - Fri: 09: 00 - 19:00</li>
              <li>Sat: 09:00 - 16:00</li>
              <li>
                Sun: <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
