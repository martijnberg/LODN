import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Deze importeren we om bootstrap mogelijk te maken
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Deze importeren we zodat het navbarhamburgermenu blijft werken
// import React from 'react';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import Paden from "./components/Paden";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* ScrollToTop wordt op elke route toegepast */}
      <div>
        <Navbar />
        <Paden />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
