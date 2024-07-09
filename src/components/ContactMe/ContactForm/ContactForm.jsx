import React from "react";
import "./ContactForm.css";

function ContactForm() {
  return (
    <div className="contact-form-content">
      <form>
        <div className="name-container">
          <input type="text" name="firstname" placeholder="First Name" />
          <input type="text" name="lastname" placeholder="Last Name" />
        </div>

        <input
          className="last-input"
          type="text"
          name="email"
          placeholder="Email"
        />
        <textarea
          style={{ height: "100%" }}
          className="last-input last-message"
          type="text"
          name="message"
          placeholder="Message"
        />

        <button disabled>SEND</button>
      </form>
    </div>
  );
}
export default ContactForm;
