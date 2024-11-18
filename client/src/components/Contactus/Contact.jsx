function Contact() {
  return (
    <>
      <p className="main-title">Find Us Here</p>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.0250432722046!2d77.10623627550392!3d28.718797575617767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d014e7953d073%3A0xa1df99c8551f3812!2sJagan%20Institute%20of%20Management%20Studies%20-%20JIMS%20Rohini!5e0!3m2!1sen!2sin!4v1731906596239!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
        <div className="main-body">
          This is the body container of the contact page
        </div>
      </div>
    </>
  );
}

export default Contact;
