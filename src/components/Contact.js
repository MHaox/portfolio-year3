// Contact.js
import React from "react";

export const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Contact Me</h2>
        <p>Feel free to reach out to me through any of the channels below</p>
        <div className="contact-info">
          <div className="contact-item">
            <h4>Email</h4>
            <a href="mailto:Max.R.Hoogeweg@gmail.com">Max.R.Hoogeweg@gmail.com</a>
            <h4>Phone</h4>
            <a href="tel:+3124205182">+3124205182</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
