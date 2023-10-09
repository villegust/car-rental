import React from "react";

import Navbar from "../components/Navbar";
import Banner from "../components/Banner/Banner";
import OurTeam from "../components/Team/Team";
import Footer from "../components/Footer";

function Team() {
  return (
    <>
      <Navbar />
      <Banner name="Team" />
      <OurTeam />
      <Footer />
    </>
  );
}

export default Team;
