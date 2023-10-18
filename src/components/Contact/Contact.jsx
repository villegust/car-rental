import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneVolume,
  faEnvelopeOpen,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

function Contact() {
  const [haveSubmited, setHaveSubmited] = useState(false);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const doneMsg = document.querySelector(".reservation-done");
    const errorMsg = document.querySelector(".error-message");

    if (fullName === "" || email === "" || question === "") {
      errorMsg.style.display = "flex";
      doneMsg.style.display = "none";
    } else {
      setHaveSubmited(!haveSubmited);
      errorMsg.style.display = "none";
      doneMsg.style.display = "flex";
      setFullName("");
      setEmail("");
      setQuestion("");
    }
  };

  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-content">
          <div className="contact-content__text">
            <h2>Need more inforamtion?</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
              fugiat nobis repellendus fugit quo dolor inventore cum? Hic iste
              alias enim id illum. Ex voluptas modi maiores necessitatibus
              suscipit totam?
            </p>
            <a href="tel:123456789">
              <FontAwesomeIcon icon={faPhoneVolume} size="lg" /> (123)-456-789
            </a>

            <a href="mailto:carrental@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} size="lg" />{" "}
              carrental@gmail.com
            </a>

            <a href="https://www.google.se/maps/place/Uppsala/@59.83334,17.5760476,12z/data=!3m1!4b1!4m6!3m5!1s0x465fcbfb8532ab8d:0xaa4fe90a85820807!8m2!3d59.8585638!4d17.6389267!16zL20vMDd0Y3M?entry=ttu">
              <FontAwesomeIcon icon={faLocationDot} size="lg" /> Uppsala, Sweden
            </a>
          </div>

          <div className="contact-content__form">
            <p className="reservation-done">
              Your question has been submited. We will be in touch shortly.
            </p>
            <p className="error-message">Please enter all the fields</p>
            <form>
              <label htmlFor="">
                Full name <b>*</b>
              </label>
              <input
                type="text"
                placeholder="E.g: John Doe"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                }}
              />

              <label htmlFor="">
                Email <b>*</b>
              </label>
              <input
                type="email"
                placeholder="youremail@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />

              <label htmlFor="">
                Question <b>*</b>
              </label>
              <textarea
                name=""
                id=""
                rows="5"
                placeholder="Write question here..."
                value={question}
                onChange={(e) => {
                  setQuestion(e.target.value);
                }}
              />
              <button onClick={handleSubmit}>
                {" "}
                <FontAwesomeIcon icon={faEnvelopeOpen} /> Send Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
