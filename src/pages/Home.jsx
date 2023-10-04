import React, { useState } from "react";

import Navbar from "../components/Navbar";

import { CAR_DATA } from "../components/Data/carData";

import Landpage from "../components/Landpage";
import BookCar from "../components/BookCar";
import Footer from "../components/Footer";
import Plan from "../components/Plan";
import CarPicker from "../components/CarPicker";

function Home() {
  const [carType, setCarType] = useState("");
  console.log(carType);

  return (
    <>
      <Navbar />

      <Landpage />
      <CarPicker carData={CAR_DATA} setCarType={setCarType} />
      <Plan />
      <BookCar carType={carType} setCarType={setCarType} />
      <Footer />
    </>
  );
}

export default Home;
