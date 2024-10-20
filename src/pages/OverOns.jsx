import React from "react";
import "./OverOns.css";

function OverOns() {
  const events = [
    {
      year: "-1964",
      images: ["/OverOns/overons48.jpg"],
      text: "Op de plek waar nu ons huis staat, lag ooit een uitgestrekte wijngaard van château Meï Lésé.",
    },
    {
      year: "1965",
      images: ["OverOns/overons19.jpg"],
      text: "In 1965 werd in de wijnvelden het Lotissement Val Du Mer gerealiseerd. Ons huis werd als tweede huis gebouwd door de beroemde architect Saviotti. ",
    },
    {
      year: "1976",
      images: ["/OverOns/overons12.jpg"],
      text: 'In 1976 werd "Les Oiseaux du Nord" aangekocht door de familie. Het terrein was praktisch onbegroeid. Hier hebben meerdere generaties hun zomers doorgebracht.',
    },
    {
      year: "1976-2020",
      images: [
        "/OverOns/overons16.jpg",
        "/OverOns/overons47.jpg",
        "/OverOns/overons54.jpg",
        "/OverOns/overons55.jpg",
        "/OverOns/overons61.jpg",
      ],
      text: 'In 1976 werd "Les Oiseaux du Nord" aangekocht door de familie Berg. Het terrein was praktisch onbegroeid. Hier hebben meerdere generaties hun zomers doorgebracht.',
    },
    {
      year: "2021-2022",
      images: [
        "/OverOns/overons58.jpg",
        "/OverOns/overons60.jpg",
        "/OverOns/overons59.jpg",
        "/OverOns/overons56.jpg",
      ],
      text: "In 2021 werd gestart met een grondige renovatie, er werd een zwembad aangelegd met een nieuw terras.",
    },
    {
      year: "2021-2022",
      images: ["/OverOns/overons57.jpg"],
      text: "Het huis werd volledig gerenoveerd. Naast zwembad en nieuw terras  kwamen airconditioning, en moderne badkamers. Het huis werd beschikbaar voor verhuur voor beperkte tijd in de zomer.",
    },
  ];

  return (
    <div className="timeline-container">
      <h1 className="timeline-title">
        De Geschiedenis van les Oiseaux du Nord
      </h1>
      <div className="timeline">
        {events.map((event, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="timeline-content">
              <div className="timeline-images">
                {event.images.map((image, i) => (
                  <img
                    key={i}
                    src={image}
                    alt={`Foto uit ${event.year}`}
                    className="timeline-image"
                  />
                ))}
              </div>
              <div className="timeline-text">
                <h2>{event.year}</h2>
                <p>{event.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OverOns;
