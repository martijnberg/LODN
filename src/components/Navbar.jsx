import "./Navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function Navbar() {
  const handleNavLinkClick = () => {
    const navbarToggler = document.querySelector(".navbar-collapse");
    if (navbarToggler) {
      navbarToggler.classList.remove("show"); // Sluit de navbar door de 'show' class te verwijderen
    }
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar fixed-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Villa Les Oiseaux du Nord
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/"
                onClick={handleNavLinkClick}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/over-ons"
                onClick={handleNavLinkClick}
              >
                Over ons
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/galerij"
                onClick={handleNavLinkClick}
              >
                Galerij
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/omgeving"
                onClick={handleNavLinkClick}
              >
                Omgeving
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/contact"
                onClick={handleNavLinkClick}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
