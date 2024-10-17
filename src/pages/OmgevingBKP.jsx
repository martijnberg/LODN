import React from "react";
import "./Omgeving.css";

function Omgeving() {
  return (
    <div className="container mt-5">
      <h1 className="mb-4" id="top">
        Ontdek de Omgeving van La Croix Valmer
      </h1>

      {/* Navigatie met links naar de secties */}
      <div className="overview">
        <h2>Verken de categorieën:</h2>
        <ul className="navigation-list">
          <li>
            <a href="#bezienswaardigheden">
              Leuke Bezienswaardigheden en Activiteiten
            </a>
          </li>
          <li>
            <a href="#restaurants">Leuke Restaurantjes in de Buurt</a>
          </li>
          <li>
            <a href="#praktisch">Praktische Informatie</a>
          </li>
          <li>
            <a href="#ontdekken">Meer te Ontdekken</a>
          </li>
        </ul>
      </div>

      {/* Bezienswaardigheden en Activiteiten */}
      <section id="bezienswaardigheden" className="mb-5">
        <h2>Leuke Bezienswaardigheden en Activiteiten</h2>
        <ul className="custom-list">
          <li>
            <strong>Markt op Place des Palmiers</strong> – Elke zondagochtend
            kunt u hier lokale producten kopen.
            <a
              href="https://www.lacroixvalmer.fr/marche"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bekijk meer
            </a>
          </li>
          <li>
            <strong>Plage de Gigaro</strong> – Een prachtig strand voor
            ontspanning.
            <a
              href="https://www.lacroixvalmer.fr/gigaro"
              target="_blank"
              rel="noopener noreferrer"
            >
              Meer info
            </a>
          </li>
        </ul>
        <a href="#top" className="btn btn-primary">
          Terug naar boven
        </a>{" "}
        {/* Terug naar boven knop */}
      </section>

      {/* Restaurantjes in de Buurt */}
      <section id="restaurants" className="mb-5">
        <h2>Leuke Restaurantjes in de Buurt</h2>
        <ul className="custom-list">
          <li>
            <strong>Restaurant Le Patio</strong> – Dineren in een mediterrane
            setting.
            <a
              href="https://www.restaurantlepatio.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bezoek de website
            </a>
          </li>
          <li>
            <strong>Chez Camille</strong> – Bekend visrestaurant aan het strand.
            <a
              href="https://www.chezcamille.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bezoek Chez Camille
            </a>
          </li>
        </ul>
        <a href="#top" className="btn btn-primary">
          Terug naar boven
        </a>{" "}
        {/* Terug naar boven knop */}
      </section>

      {/* Praktische Informatie */}
      <section id="praktisch" className="mb-5">
        <h2>Praktische Informatie</h2>
        <ul className="custom-list">
          <li>
            <strong>Huisarts Dr. Martin</strong> – Voor medische hulp tijdens uw
            verblijf.
            <a
              href="https://www.drmartin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bezoek de website
            </a>
          </li>
          <li>
            <strong>Apotheek Valmer</strong> – Voor al uw medische
            benodigdheden.
            <a
              href="https://www.pharmacievalmer.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bekijk meer
            </a>
          </li>
        </ul>
        <a href="#top" className="btn btn-primary">
          Terug naar boven
        </a>{" "}
        {/* Terug naar boven knop */}
      </section>

      {/* Meer te Ontdekken */}
      <section id="ontdekken">
        <h2>Meer te Ontdekken</h2>
        <p>
          In de omgeving zijn nog tal van andere leuke plekjes om te ontdekken,
          van kleine boetiekjes tot wijngaarden. Vraag ons gerust om tips!
        </p>
        <a href="#top" className="btn btn-primary">
          Terug naar boven
        </a>{" "}
        {/* Terug naar boven knop */}
      </section>
    </div>
  );
}

export default Omgeving;
