import React, { useState } from "react";
import "./Omgeving.css";

const exampleImages = [
  "/OverOns/overons08.jpg",
  "/OverOns/overons09.jpg",
  "/OverOns/overons12.jpg",
  "/OverOns/overons16.jpg",
  "/OverOns/overons19.jpg",
];

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5); // Shuffle the images for a new layout
}

function OmgevingMosaic() {
  const [images, setImages] = useState(shuffleArray([...exampleImages]));

  const handleCategoryClick = () => {
    setImages(shuffleArray([...exampleImages])); // Shuffle images on category click
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Ontdek de Omgeving van La Croix Valmer</h1>

      {/* Navigatie met categorieën */}
      <div className="overview">
        <h2>Verken de categorieën:</h2>
        <ul className="navigation-list">
          <li>
            <button onClick={handleCategoryClick}>
              Leuke Bezienswaardigheden en Activiteiten
            </button>
          </li>
          <li>
            <button onClick={handleCategoryClick}>
              Leuke Restaurantjes in de Buurt
            </button>
          </li>
          <li>
            <button onClick={handleCategoryClick}>Praktische Informatie</button>
          </li>
          <li>
            <button onClick={handleCategoryClick}>Meer te Ontdekken</button>
          </li>
        </ul>
      </div>

      {/* Mozaïek van plaatjes */}
      <div className="mosaic-grid">
        {images.map((image, index) => (
          <div
            key={index}
            className={`mosaic-item mosaic-item-${(index % 3) + 1}`}
          >
            <img src={image} alt={`Mosaic ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OmgevingMosaic;
