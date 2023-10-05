import React from "react";

import BookingModal from "./Modal/BookingModal";
import { useState, useEffect } from "react";

import carAudi from "../images/Cars/audi-rs6.jpg";
import carBmw from "../images/Cars/bmw-m4-compentition.jpg";
import mercedesCar from "../images/Cars/mercedes-benz-g-wagon.jpg";
import porscheCar from "../images/Cars/Porsche_911_GT3_RS.jpg";
import koenigseggCar from "../images/Cars/Koenigsegg-Jesko.jpg";
import astonmartinCar from "../images/Cars/aston-martin.jpg";
import lamborginiUrus from "../images/Cars/lamborghini-urus.jpg";

function BookCar({ carType, setCarType }) {
  const [modal, setModal] = useState(false);

  //   booking useStates
  const [pickUp, setPickUp] = useState("");
  const [dropOff, setDropOff] = useState("");
  const [pickUpTime, setPickUpTime] = useState("");
  const [dropOffTime, setDropOffTime] = useState("");
  const [carImage, setCarImage] = useState("");

  useEffect(() => {
    if (modal === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [modal]);

  const handleCar = (e) => {
    setCarType(e.target.value);
    setCarImage(e.target.value);
    console.log("Handle car runs");
  };
  useEffect(() => {
    setCarImage(carType);
  }, [carType]);

  const openModal = (e) => {
    e.preventDefault();
    const errorMsg = document.querySelector(".error-message");
    if (
      pickUp === "" ||
      dropOff === "" ||
      pickUpTime === "" ||
      dropOffTime === ""
    ) {
      errorMsg.style.display = "flex";
    } else {
      setModal(!modal);
      const modalDiv = document.querySelector(".booking-modal");
      modalDiv.scroll(0, 0);
      errorMsg.style.display = "none";
    }
  };

  const confirmBooking = (e) => {
    e.preventDefault();
    setModal(!modal);
    const doneMsg = document.querySelector(".reservation-done");
    doneMsg.style.display = "flex";
  };

  let imgUrl;
  switch (carImage) {
    case "Audi RS6 Avant":
      imgUrl = carAudi;
      break;

    case "BMW M4 Compentition":
      imgUrl = carBmw;
      break;

    case "Mercedes Benz G63 Wagon":
      imgUrl = mercedesCar;
      break;

    case "Porsche 911 GT3 RS":
      imgUrl = porscheCar;
      break;

    case "Aston Martin DB5":
      imgUrl = astonmartinCar;
      break;

    case "Lamborghini Urus":
      imgUrl = lamborginiUrus;
      break;

    case "Koenigsegg Jesko":
      imgUrl = koenigseggCar;
      break;

    default:
      imgUrl = "";
  }

  return (
    <>
      <section id="booking-section" className="booking-section">
        <div
          onClick={openModal}
          className={`modal-overlay ${modal ? "active-modal" : ""}`}
        ></div>

        <div className="container">
          <div className="booking-content">
            <div className="booking-content__box">
              <p className="error-message">All fields required!</p>
              <p className="reservation-done">
                {" "}
                Your reservation has been submited. Check your email to confirm
                the order.
              </p>
              <h2>Book you car</h2>
              <form className="form-box">
                <div className="form-box__car-type">
                  <label className="input-icon">
                    Select your car type <b>*</b>
                  </label>
                  <select value={carType} onChange={handleCar}>
                    <option value="">Select your car</option>
                    <option value="Audi RS6 Avant">Audi RS6 Avant</option>
                    <option value="BMW M4 Compentition">
                      BMW M4 Compentition
                    </option>
                    <option value="Mercedes Benz G63 Wagon">
                      Mercedes Benz G63 Wagon
                    </option>
                    <option value="Porsche 911 GT3 RS">
                      Porsche 911 GT3 RS
                    </option>
                    <option value="Aston Martin DB5">Aston Martin DB5</option>
                    <option value="Lamborghini Urus">Lamborgini Urus</option>
                    <option value="Koenigsegg Jesko">Koenigsegg Jesko</option>
                  </select>
                </div>
                <div className="form-box__car-type">
                  <label className="input-icon">
                    Pick up <b>*</b>
                  </label>
                  <select
                    value={pickUp}
                    onChange={(e) => setPickUp(e.target.value)}
                  >
                    <option value="">Select your pickup location</option>
                    <option value="Stockholm">Stockholm</option>
                    <option value="Uppsala">Uppsala</option>
                    <option value="Malmö">Malmö</option>
                    <option value="Linköping">Linköping</option>
                    <option value="Göteborg ">Göteborg </option>
                  </select>
                </div>
                <div className="form-box__car-type">
                  <label className="input-icon">
                    Drop off <b>*</b>
                  </label>
                  <select
                    value={dropOff}
                    onChange={(e) => setDropOff(e.target.value)}
                  >
                    <option value="">Select your drop off location</option>
                    <option value="Stockholm">Stockholm</option>
                    <option value="Uppsala">Uppsala</option>
                    <option value="Malmö">Malmö</option>
                    <option value="Linköping">Linköping</option>
                    <option value="Göteborg ">Göteborg </option>
                  </select>
                </div>
                <div className="form-box__car-date">
                  <label htmlFor="datepicker">
                    Pick upp time <b>*</b>
                  </label>
                  <input
                    type="date"
                    id="datepicker"
                    value={pickUpTime}
                    onChange={(e) => setPickUpTime(e.target.value)}
                  />
                </div>
                <div className="form-box__car-date">
                  <label htmlFor="datepicker">
                    Drop off time <b>*</b>
                  </label>
                  <input
                    type="date"
                    id="datepicker"
                    value={dropOffTime}
                    onChange={(e) => setDropOffTime(e.target.value)}
                  />
                </div>

                <button type="submit" onClick={openModal}>
                  Search for your car
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className={`booking-modal ${modal ? "active-modal" : ""}`}>
        <BookingModal
          carType={carType}
          pickUp={pickUp}
          dropOff={dropOff}
          pickUpTime={pickUpTime}
          dropOffTime={dropOffTime}
          imgUrl={imgUrl}
          modal={modal}
          setModal={setModal}
        />
        <div className="reserve-button">
          <button onClick={confirmBooking}>Reserve now</button>
        </div>
      </div>
    </>
  );
}

export default BookCar;
