import React from "react";

import './dist/styles.css';
import { Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Models from "./pages/Models"
import Team from "./pages/Team"
import Contact from "./pages/Contact"
import Reviews from "./pages/Reviews"
import Login from "./components/Login"
import Register from "./components/Register"

function App() {
  return (
    <>
      <Routes>
          <Route index path="/" element={ <Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/fleet" element={<Models />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
