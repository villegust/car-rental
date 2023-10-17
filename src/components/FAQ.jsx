import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function Faq({ data }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    if (index === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-content">
          <div className="faq-content__title">
            <h4>FAQ</h4>
            <h2>Frequently Asked Questions</h2>
            <p>
              Frequently Asked Questions About the Car Rental Booking Process on
              Our Website: Answers to Common Concerns and Inquiries.
            </p>
          </div>
          <div className="all-questions">
            {data.map((item, index) => {
              return (
                <div className="faq-box" key={index}>
                  <div
                    className={`faq-box__questions ${
                      activeIndex === index
                        ? "faq-box__questions__active-question"
                        : ""
                    }`}
                    onClick={() => handleToggle(index)}
                  >
                    <p>{item.question}</p>
                    <FontAwesomeIcon icon={faAngleDown} size="2xl" />
                  </div>

                  {activeIndex === index && (
                    <div className="faq-box__answer">
                      <p>{item.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
