import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneVolume,
  faEnvelopeOpen,
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
    } else {
      setHaveSubmited(!haveSubmited);
      errorMsg.style.display = "none";
      doneMsg.style.display = "flex";
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
              <FontAwesomeIcon icon={faPhoneVolume} /> (123)-456-789
            </a>
            <a href="mailto:carrental@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} /> carrental@gmail.com
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
                type="text"
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
            </form>
            <button onClick={handleSubmit}>
              {" "}
              <FontAwesomeIcon icon={faEnvelopeOpen} /> Send Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
