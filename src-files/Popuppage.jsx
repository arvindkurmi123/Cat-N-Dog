import React, { useState } from "react";
import "./popupPages.css";

function ContactPopup({ onClose }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Your Name here"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Enter your email address here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Wanna share something with us?"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <button type="submit">Submit</button>
        </form>
        <p className="help-text">
          Need more info ? &nbsp; &nbsp; &nbsp;
          <a href="mailto:hello@newzera.com">hello@newzera.com</a>
          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-twitter"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
        </p>

      </div>
    </div>
  );
}

export default ContactPopup;
