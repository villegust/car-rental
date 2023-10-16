import React from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

function Model({ carData }) {
  const navigate = useNavigate();

  const reserveBtn = () => {
    navigate("/");
    window.scrollTo(0, 0);
  };

  return (
    <>
      <section className="models-section">
        <div className="container">
          <div className="models">
            {carData.map((data, index) => {
              for (let i = 0; i < data.length; i++) {
                return (
                  <div key={index} className="models__box">
                    <div className="models__box__img">
                      <img src={data[i].modelImg} alt="Car url" />
                    </div>

                    <div className="models__box__desc">
                      <div className="models__box__desc__name-price">
                        <div className="models__box__desc__name-price__name">
                          <p>{data[i].name}</p>
                          <span>
                            {" "}
                            <FontAwesomeIcon icon={faStar} />{" "}
                            <FontAwesomeIcon icon={faStar} />{" "}
                            <FontAwesomeIcon icon={faStar} />{" "}
                            <FontAwesomeIcon icon={faStar} />{" "}
                            <FontAwesomeIcon icon={faStar} />{" "}
                          </span>
                        </div>
                        <div className="models__box__desc__name-price__price">
                          <h4>{data[i].price} kr</h4>
                          <p>per day</p>
                        </div>
                      </div>
                      <div className="models__box__desc__name-price__details">
                        <span> {data[i].mark} </span>
                        <span className="models__box__desc__name-price__details__alignment">
                          {" "}
                          {data[i].doors}{" "}
                        </span>
                        <span> {data[i].transmission} </span>
                        <span className="models__box__desc__name-price__details__alignment">
                          {" "}
                          {data[i].fuel}{" "}
                        </span>
                      </div>
                      <div className="models__box__desc__name-price__details__btn">
                        <button onClick={reserveBtn}>Reserve now</button>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Model;
