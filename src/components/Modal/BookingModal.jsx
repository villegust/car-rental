import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faXmark } from "@fortawesome/free-solid-svg-icons";

// TODO: Move the reserve button to this component

function BookingModal({
  carType,
  pickUp,
  dropOff,
  pickUpTime,
  dropOffTime,
  imgUrl,
  setModal,
  modal,
}) {
  const closeModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className="booking-modal__title">
        <h2>Complete reservation</h2>
        <span onClick={closeModal}>
          <FontAwesomeIcon
            icon={faXmark}
            size="2xl"
            style={{ color: "#fff" }}
          />
        </span>
      </div>
      <div className="booking-modal__car-info">
        <div className="carInfo-div">
          <div className="booking-modal__car-info__carInfo">
            <h5>Location and dates</h5>
            <div>
              <h6>
                <FontAwesomeIcon icon={faLocationDot} /> Pick-Up Date & Time
              </h6>
              <p>
                {pickUpTime} /{" "}
                <input type="time" className="input-time"></input>
              </p>
            </div>
          </div>

          <div className="booking-modal__car-info__carInfo">
            <div>
              <h6>
                <FontAwesomeIcon icon={faLocationDot} /> Drop off Date & Time
              </h6>
              <p>
                {dropOffTime} /{" "}
                <input type="time" className="input-time"></input>
              </p>
            </div>
          </div>

          <div className="booking-modal__car-info__carInfo">
            <div>
              <h6>
                <FontAwesomeIcon icon={faLocationDot} /> Pick up Location
              </h6>
              <p>{pickUp} </p>
            </div>
          </div>
          <div className="booking-modal__car-info__carInfo">
            <div>
              <h6>
                <FontAwesomeIcon icon={faLocationDot} /> Drop off Location
              </h6>
              <p>{dropOff} </p>
            </div>
          </div>
        </div>

        <div className="booking-modal__car-info__model">
          <h5>Car - {carType}</h5>
          <img src={imgUrl} alt="car images" />
        </div>
      </div>
      <div className="booking-modal__personalInfo">
        <h4>Personal Inforamtion</h4>

        <form className="form">
          <div className="form__2cols">
            <span>
              <label>First Name</label>
              <input type="text" placeholder="Enter your first name" />
              <p className="error-modal">This field is required.</p>
            </span>

            <span>
              <label>Last Name</label>
              <input type="text" placeholder="Enter your last name" />
              <p className="error-modal">This field is required.</p>
            </span>

            <span>
              <label>Phone Number</label>
              <input type="text" placeholder="Enter your phonenumber" />
              <p className="error-modal">This field is required.</p>
            </span>

            <span>
              <label>Age</label>
              <input type="number" placeholder="Enter your age" />
              <p className="error-modal">This field is required.</p>
            </span>
          </div>

          <div className="form__1cols">
            <span>
              <label>Email</label>
              <input type="text" placeholder="Enter your email" />
              <p className="error-modal">This field is required.</p>
            </span>

            <span>
              <label>Address</label>
              <input type="text" placeholder="Enter your address" />
              <p className="error-modal">This field is required.</p>
            </span>
          </div>

          <div className="form__2cols">
            <span>
              <label>City</label>
              <input type="text" placeholder="Enter your city" />
              <p className="error-modal">This field is required.</p>
            </span>

            <span>
              <label>Zip code</label>
              <input type="text" placeholder="Enter your zip code" />
              <p className="error-modal">This field is required.</p>
            </span>
          </div>
        </form>
      </div>
    </>
  );
}

export default BookingModal;
