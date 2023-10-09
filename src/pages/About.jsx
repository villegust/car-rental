import React from "react";

import Navbar from "../components/Navbar";
import Banner from "../components/Banner/Banner";
import AboutUs from "../components/About/About";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />
      <Banner name="About" />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
