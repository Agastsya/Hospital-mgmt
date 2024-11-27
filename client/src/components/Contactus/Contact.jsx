import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <h1 className="contact-header">Get In Touch</h1>
      <div className="contact-wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.0250432722046!2d77.10623627550392!3d28.718797575617767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d014e7953d073%3A0xa1df99c8551f3812!2sJagan%20Institute%20of%20Management%20Studies%20-%20JIMS%20Rohini!5e0!3m2!1sen!2sin!4v1731906596239!5m2!1sen!2sin"
          className="contact-map"
          allowFullScreen
          loading="lazy"
        ></iframe>
        <div className="contact-form-container">
          <p className="contact-text">
            Have a question or want to work with us? Fill out the form below and
            we’ll get back to you as soon as possible!
          </p>
          <form className="contact-form">
            <input
              type="text"
              placeholder="Your Name"
              className="form-input"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="form-input"
              required
            />
            <textarea
              placeholder="Your Message"
              className="form-textarea"
              required
            ></textarea>
            <button type="submit" className="form-submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
