import React from "react";
import Contactformulier from "../components/Contactformulier";

function Contact() {
  return (
    <div className="container">
      <h1>Interesse?</h1>
      <p>
        Voor vragen over de verhuur van ons vakantiehuis werken wij samen met
        ASK Conciergerie. Zij beheren de boekingen en zorgen voor een soepel
        verloop van uw verblijf. U kunt direct contact opnemen via hun website:
        <a href="https://www.askconciergerie.fr/">ASK Conciergerie</a>.
      </p>
      <p>
        Daarnaast kunt u ook onderstaand contactformulier invullen voor algemene
        vragen of opmerkingen. Wij zorgen ervoor dat uw bericht zo snel mogelijk
        wordt beantwoord en, indien nodig, doorgegeven aan ASK Conciergerie.
      </p>
      <p> Wij hopen u snel te mogen verwelkomen in Les Oiseaux du Nord!</p>
      <div id="contact-form">
        <Contactformulier />
      </div>
    </div>
  );
}

export default Contact;
