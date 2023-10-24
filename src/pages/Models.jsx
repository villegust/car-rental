import React from "react";

import { CAR_DATA } from "../components/Data/Data";

import Navbar from "../components/Navbar";
import Banner from "../components/Banner/Banner";
import Fleet from "../components/Fleet/Fleet";
import Divider from "../components/Divider/Divider";
import Footer from "../components/Footer";

function Models() {
  return (
    <>
      <Navbar />
      <Banner name="Models" />
      <Fleet carData={CAR_DATA} />
      <Divider />
      <Footer />
    </>
  );
}

export default Models;
