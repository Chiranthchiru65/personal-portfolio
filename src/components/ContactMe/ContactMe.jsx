import React from "react";
import "./contactMe.css";
import ContactInfoCard from "./ContactInfoCard";

import ContactForm from "./ContactForm/ContactForm";

function ContactMe() {
  return (
    <section className="contact-container">
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard
            iconUrl="https://img.icons8.com/nolan/96/filled-message.png"
            text="mailto:chiranthchiru65@gmail.com"
            name="chiranthchiru65@gmail.com"
          />
          <ContactInfoCard
            iconUrl="https://img.icons8.com/nolan/96/github.png"
            text="https://github.com/Chiranthchiru65"
            name="Chiranthchiru65"
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default ContactMe;
