import React from "react";
import { Link } from "react-router-dom";
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
            <a href="#marktjes">Marktjes</a>
          </li>
          <li>
            <a href="#restaurants">Leuke Restaurantjes in de Buurt</a>
          </li>
          <li>
            <a href="#ontdekken">Meer te Ontdekken</a>
          </li>
        </ul>
      </div>

      {/* Bezienswaardigheden en Activiteiten */}
      <section id="marktjes" className="mb-5">
        <h2>Marktjes</h2>
        <ul className="custom-list">
          <li>
            <strong>Place des Palmiers, La Croix Valmer</strong> – Elke
            zondagochtend kunt u hier in het centrum can La Croix Valmer lokale
            producten kopen.
          </li>
          <li>
            <strong>Place des Lices, Saint Tropez</strong> – Elke
            zaterdagochtend en dinsdagochtend is er markt op de Place des Lices
            in Saint Tropez. Deze drukbezochte markt is zeer uitgebreid. Zo is
            er ook een uitgebreid antiek- en vintage aanbod. Vertrek in het
            hoogseizoen op tijd want het kan vrij druk zijn in het hoogseizoen.
          </li>
          <li>
            <strong>Jas des Robert, Cogolin</strong> – Vindt plaats iedere
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
          </li>
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
          </li>{" "}
          <li>
            <strong>la Verdoyante</strong> – Authentiek provencaals eten in deze
            rustiek boerderij met mooie tuin. Gelegen in Gassin met uitzicht
            over de wijnvelden van Saint-Tropez.
            <a
              href="https://www.la-verdoyante.fr/"
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
      {/* Restaurantjes in de Buurt */}
      <section id="ontdekken" className="mb-5">
        <h2>Meer te ontdekken</h2>
        <ul className="custom-list">
          <li>
            <strong>Plage Sylvabelle</strong> – Idyllisch strandje tussen plage
            du Débarquement en Figaro. Alleen te voet bereikbaar.
            <a
              href="https://www.lacroixvalmertourisme.com/fr/decouvrir-et-s-evader/les-pieds-dans-l-eau/sylvabelle"
              target="_blank"
              rel="noopener noreferrer"
              className="description-link"
            >
              Meer lezen
            </a>
          </li>
          <li>
            <strong>Diverse zaken</strong> – In de omgeving zijn nog tal van
            andere leuke plekjes om te ontdekken, van kleine boetiekjes tot
            wijngaarden.
            <Link to="/contact#contact-form">Vraag ons gerust om tips</Link>
          </li>
        </ul>
        <a href="#top" className="btn btn-primary">
          Terug naar boven
        </a>
        {/* Terug naar boven knop */}
      </section>
    </div>
  );
}

export default Omgeving;
