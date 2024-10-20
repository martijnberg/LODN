import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Contactformulier from "../components/Contactformulier";
import Socials from "../components/Soclals";

function Home() {
  return (
    <>
      {/* Rest van de pagina in een normale container */}
      <div className="container">
        <h1 className="titel">Les Oiseaux du Nord</h1>
      </div>
      {/* Afbeelding buiten container voor volledige breedte */}
      <div className="full-width-image">
        <img
          src="/Les_Oiseaux_du_Nord.jpg"
          alt="Vakantiehuis"
          className="full-image"
        />
      </div>
      {/* Rest van de pagina in een normale container */}
      <div className="container">
        <p>
          Welkom in ons familiehuis in La Croix Valmer, aan de Côte d’Azur.
          Geniet van het adembenemende uitzicht op de Middellandse Zee en ervaar
          een onvergetelijke vakantie aan de Franse Riviera. Het huis is
          beschikbaar voor verhuur in juli en augustus en biedt ruimte aan
          maximaal 6 personen, bovendien is er een kinderbedje aanwezig, ideaal
          voor gezinnen. Onze compleet gerenoveerde villa beschikt over drie
          comfortabele slaapkamers en drie moderne badkamers, zodat iedereen
          geniet van privacy en gemak. U blijft verbonden dankzij de snelle
          wifi, terwijl de airconditioning zorgt voor verkoeling op warme
          zomerdagen. Het privézwembad biedt de perfecte plek om te ontspannen
          na een dag vol avontuur in de regio. Of u nu wilt genieten van de rust
          of de levendige Côte d’Azur wilt verkennen, ons vakantiehuis biedt
          alle gemakken voor een zorgeloos verblijf. We hopen u binnenkort te
          mogen verwelkomen in La Croix Valmer.
        </p>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-4">
              <div className="card card-vakantiehuis">
                <img
                  src="/OverOns/overons55.jpg"
                  className="card-img-top"
                  alt="Card 1"
                />
                <div className="card-body">
                  <h5 className="card-title">Over ons</h5>
                  <p className="card-text">
                    Ontdek de rijke geschiedenis van ons familiehuis,
                    gerenoveerd met liefde en modern comfort.
                  </p>
                  <Link to="/over-ons" className="btn btn-primary">
                    Lees meer
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card card-vakantiehuis">
                <img
                  src="/Carousel/VRBO29.jpg"
                  className="card-img-top"
                  alt="Card 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Fotogalerij</h5>
                  <p className="card-text">
                    Bekijk prachtige foto’s van ons huis, inclusief het zwembad
                    en een panoramisch uitzicht op zee.
                  </p>
                  <Link to="/galerij" className="btn btn-primary">
                    Lees meer
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card card-vakantiehuis">
                <img
                  src="/Saint_Tropez.jpg"
                  className="card-img-top"
                  alt="Card 3"
                />
                <div className="card-body">
                  <h5 className="card-title">Omgeving</h5>
                  <p className="card-text">
                    Verken de charmante omgeving met gezellige marktjes,
                    prachtige stranden en heerlijke restaurants.
                  </p>
                  <Link to="/omgeving" className="btn btn-primary">
                    Lees meer
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contactformulier />
      <Socials />
    </>
  );
}

export default Home;
