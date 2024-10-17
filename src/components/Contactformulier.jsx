import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contactformulier.css";

function Contactformulier() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS parameters
    const serviceID = "service_ykm89eh";
    const templateID = "template_rvrmfjd";
    const userID = "nptHGgC-rAYLcOrFG";

    // E-mail verzenden via EmailJS
    emailjs
      .send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log("Succes!", response.status, response.text);
        alert("E-mail verzonden!");
        clearForm();
      })
      .catch((err) => {
        console.error("Er ging iets mis:", err);
        alert("Het verzenden van de e-mail is mislukt. Probeer het opnieuw.");
      });
  };

  const clearForm = () => {
    setFormData({
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="container mt-5 formulierInput">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            E-mail afzender
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="subject" className="form-label">
            Onderwerp
          </label>
          <input
            type="text"
            className="form-control"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="message" className="form-label">
            Bericht
          </label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Verstuur
        </button>
      </form>
    </div>
  );
}

export default Contactformulier;
