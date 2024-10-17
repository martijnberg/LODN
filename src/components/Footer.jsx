import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Les Oiseaux du Nord. Alle rechten voorbehouden.</p>
      </div>

      {/* Instagram Icon */}
      <div className="footer-icon">
        <a
          href="https://www.instagram.com/les_oiseaux_du_nord/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="instagram-icon"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37a4 4 0 1 0-4.63 4.63 4 4 0 0 0 4.63-4.63z"></path>
            <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"></line>
          </svg>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
