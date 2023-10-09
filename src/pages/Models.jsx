import React from "react";

import { CAR_DATA } from "../components/Data/carData";

import Navbar from "../components/Navbar";
import Banner from "../components/Banner/Banner";
import Model from "../components/Models/Model";
import Divider from "../components/Divider/Divider";
import Footer from "../components/Footer";

function Models() {
  return (
    <>
      <Navbar />
      <Banner name="Models" />
      <Model carData={CAR_DATA} />
      <Divider />
      <Footer />
    </>
  );
}

export default Models;
