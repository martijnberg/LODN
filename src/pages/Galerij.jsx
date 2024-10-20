import React from "react";
import "./Galerij.css";

function Galerij() {
  // Functie om een array van afbeeldingen te genereren
  const generateImageArray = (count) => {
    const images = [];
    for (let i = 1; i <= count; i++) {
      // Format the number to always have two digits (e.g., VRBO01, VRBO02, etc.)
      const formattedNumber = i.toString().padStart(2, "0");
      images.push(`/Carousel/VRBO${formattedNumber}.jpg`);
    }
    return images;
  };

  // Genereer een array met 33 afbeeldingen
  const images = generateImageArray(31);

  return (
    <div className="carousel-container">
      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <img
                src={image}
                className="d-block w-100"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Galerij;
