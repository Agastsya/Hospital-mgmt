import "./Footer.css";

function Footer() {
  return (
    <section className="footer-section">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-logo-container">
            <img
              className="footer-logo"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/logo.svg"
              alt=""
            />
            <p className="footer-text">
              © 2024 Helixos. Dedicated to providing exceptional care and
              ensuring the well-being of our community. For assistance, contact
              us at +011 888888888 or helixhelper@gmail.com . In case of
              emergencies, reach out to our 24/7 helpline at +011 232323232.
              Your privacy is important to us—read our{" "}
              <span className="spanner">Privacy Policy</span> and{" "}
              <span className="spanner">Terms of Service</span> for more details
            </p>
            <ul className="footer-social">
              {/* Add your social media icons here */}
            </ul>
          </div>
          {/* Add additional footer columns */}
        </div>
        <hr className="footer-divider" />
        <p className="footer-copyright">
          © Copyright 2021, All Rights Reserved by Postcraft
        </p>
      </div>
    </section>
  );
}

export default Footer;
