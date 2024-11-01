import React, { useState } from "react";
import "../styles/Contact.css"; // Proper path to your CSS file
import Footer from "../components/Footer";

export const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    email: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        access_key: "c41ba285-8635-4cc2-9a07-e3d53396d5f7",
        name: formDetails.firstName,
        email: formDetails.email,
        message: formDetails.message,
      }),
    });
    setButtonText("Send");
    const result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: "Message sent successfully!" });
    } else {
      setStatus({
        success: false,
        message: "Something went wrong, please try again later.",
      });
    }
  };

  return (
    <>
      <section className="contact-section" id="connect">
        <div className="contact-container">
          <div className="contact-info-wrap">
            <h2 className="contact-heading">Get In Touch</h2>
            <div className="info-wrap">
              <div className="contact-dbox">
                <span className="contact-icon fa fa-map-marker"></span>
                <p className="contact-text">
                  Jakarta, Indonesia
                </p>
              </div>
              <a href="https://wa.me/67077425220" target="blank" className="contact-dbox">
                <span className="contact-icon fa fa-phone"></span>
                <p className="contact-text">
                  +67077425220
                </p>
              </a>
              <a href="mailto:bepi.management@gmail.com" target="blank" className="contact-dbox">
                <span className="contact-icon fa fa-paper-plane"></span>
                <p className="contact-text">
                  bepi.management@gmail.com
                </p>
              </a>
            </div>
          </div>
          <div className="contact-form-wrap">
            <h2 className="contact-heading">Message Form</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  className="contact-form-input"
                  value={formDetails.firstName}
                  placeholder="Your Name"
                  onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="contact-form-input"
                  value={formDetails.email}
                  placeholder="Your Email"
                  onChange={(e) => onFormUpdate("email", e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  className="contact-form-textarea"
                  rows="6"
                  value={formDetails.message}
                  placeholder="Your Message"
                  onChange={(e) => onFormUpdate("message", e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="form-group text-end">
                <button type="submit" className="contact-form-button">
                  {buttonText}
                </button>
              </div>
              {status.message && (
                <div
                  className={`contact-form-message ${status.success ? "contact-success" : "contact-danger"
                    }`}
                >
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
