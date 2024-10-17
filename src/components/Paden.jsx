// import React from 'react';
import "./Paden.css";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import OverOns from "../pages/OverOns";
import Galerij from "../pages/Galerij";
import Contact from "../pages/Contact";
import Omgeving from "../pages/Omgeving";

function Paden() {
  return (
    <div className="page-content container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/over-ons" element={<OverOns />} />
        <Route path="/galerij" element={<Galerij />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/omgeving" element={<Omgeving />} />
      </Routes>
    </div>
  );
}

export default Paden;
