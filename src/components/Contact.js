// Contact.js
import React from "react";
import git from "../assets/img/github-mark-white.svg";
import linked from "../assets/img/linkedin-mark-white.svg";

export const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Contact Me</h2>
        <p>Feel free to reach out to me through any of the channels below:</p>
        <div className="contact-info">
          <div className="contact-item">
            <h4>Email</h4>
            <a href="mailto:Max.R.Hoogeweg@gmail.com">Max.R.Hoogeweg@gmail.com</a>
            <h4>Phone</h4>
            <a href="tel:+3124205182">+3124205182</a>
          </div>
          <div className="contact-item">
          <h4>Social</h4>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/max-robert-hoogeweg/">
                <img src={linked} alt="LinkedIn" />
              </a>
            </div>
            <div className="social-icon">
              <a href="https://github.com/MHaox">
                <img src={git} alt="GitHub" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
