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
            <a href="#bezienswaardigheden">Marktjes</a>
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
        <h2>Marktjes</h2>
        <ul className="custom-list">
          <li>
            <strong>Markt op Place des Palmiers</strong> – Elke zondagochtend
            kunt u hier in het centrum can La Croix Valmer lokale producten
            kopen.
          </li>
          <li>
            <strong>Markt op Place des Lices, Saint Tropez</strong> – Elke
            zaterdagochtend en dinsdagochtend is er markt op de Place des Lices
            in Saint Tropez. Deze drukbezochte markt is zeer uitgebreid. Zo is
            er ook een uitgebreid antiek- en vintage aanbod. Vertrek in het
            hoogseizoen op tijd want het kan vrij druk zijn in het hoogseizoen.
          </li>
          <li>
            <strong>Brocante Jas des Robert</strong> – Vindt plaats iedere
            zondagochtend in Cogolin op het kruispunt van Chemin des Pasquiers
            and Chemin de Nègresse. Deze authentieke provençaalse brocante wordt
            zowel door toeristen als locals druk bezocht.
          </li>
        </ul>
        <a href="#top" className="btn btn-primary">
          Terug naar boven
        </a>
        {/* Terug naar boven knop */}
      </section>

      {/* Restaurantjes in de Buurt */}
      <section id="restaurants" className="mb-5">
        <h2>Leuke Restaurantjes in de Buurt</h2>
        <ul className="custom-list">
          <li>
            <strong>Au Vieux Gassin</strong> – Dineren in een mediterrane
            setting in het pittoresque plaatsje Gassin.
            <a
              href="https://auvieuxgassin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="description-link"
            >
              Bezoek de website
            </a>
          </li>{" "}
          <li>
            <strong>Café Valmer</strong> – Gelegen in het centrum van La Croix
            Valmer. Café Valmer staat bekend als een uitstekend visrestaurant.
            <a
              href="https://www.cafe-valmer.fr/"
              target="_blank"
              rel="noopener noreferrer"
              className="description-link"
            >
              Bezoek de website
            </a>
          </li>
          <li>
            <strong>Le Nautic</strong> – Bekendste restaurant aan de plage du
            Débarquement. Gelegen aan het strand met goede service.
            <a
              href="https://lenauticbeach.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="description-link"
            >
              Bezoek de website
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
              className="description-link"
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
              className="description-link"
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
