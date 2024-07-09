import React from "react";
import "./ContactInfoCard.css";

function ContactInfoCard({ iconUrl, text, name }) {
  return (
    <div
      onClick={() => window.open(`${text}`)}
      className="contact-details-card"
    >
      <div className="icon">
        <img src={iconUrl} alt={text} />
      </div>
      <p>{name}</p>
    </div>
  );
}
export default ContactInfoCard;
