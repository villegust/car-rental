import React, { useState } from "react";

import Navbar from "../components/Navbar";

import { CAR_DATA } from "../components/Data/Data";
import { FAQ_DATA } from "../components/Data/Data";

import Landpage from "../components/Landpage";
import BookCar from "../components/BookCar";
import Footer from "../components/Footer";
import Plan from "../components/Plan";
import CarPicker from "../components/CarPicker";
import FAQ from "../components/FAQ";

import ScrollToTop from "../components/ToTop/Top";

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
      <FAQ data={FAQ_DATA} />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Home;
