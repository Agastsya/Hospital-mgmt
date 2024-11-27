import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <h1 className="about-header">About Us</h1>

      {/* About Content Section */}
      <div className="about-wrapper">
        <div className="about-content">
          <h2 className="about-title">Who We Are</h2>
          <p className="about-text">
            Welcome to our journey! We are a passionate team dedicated to
            delivering innovative solutions and creating lasting impact. Our
            mission is to push boundaries, challenge norms, and empower people
            through our work. Whether it’s technology, creativity, or
            collaboration, we thrive on making a difference.
          </p>
          <p className="about-text">
            Our story began with a vision to transform ideas into reality. With
            a blend of expertise and enthusiasm, we’re committed to excellence,
            continuous learning, and contributing to a better world.
          </p>
        </div>
        <div className="about-image-container">
          <img
            src="https://via.placeholder.com/500x400.png?text=Our+Team"
            alt="Our Team"
            className="about-image"
          />
        </div>
      </div>

      {/* FAQ Section */}
      <div className="faq-section">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <div className="faq-item">
          <h3 className="faq-question">What services do you offer?</h3>
          <p className="faq-answer">
            We provide a range of services including technology development,
            consulting, and creative solutions to help businesses thrive in
            today’s competitive landscape.
          </p>
        </div>
        <div className="faq-item">
          <h3 className="faq-question">How can I get in touch with you?</h3>
          <p className="faq-answer">
            You can reach out through our Contact Us page, or simply fill out
            the feedback form below to share your thoughts.
          </p>
        </div>
        <div className="faq-item">
          <h3 className="faq-question">Where are you located?</h3>
          <p className="faq-answer">
            Our office is located in [Your City/Region], but we serve clients
            globally through online channels.
          </p>
        </div>
      </div>

      {/* Feedback Form Section */}
      <div className="feedback-form-container">
        <h2 className="feedback-title">We Value Your Feedback</h2>
        <form className="feedback-form">
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
            placeholder="Your Feedback"
            className="form-textarea"
            required
          ></textarea>
          <button type="submit" className="form-submit">
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
}

export default About;
