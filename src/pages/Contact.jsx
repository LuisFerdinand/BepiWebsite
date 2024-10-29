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
    let response = await fetch("//serverwebsite", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
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

  const handleIconClick = (type) => {
    switch (type) {
      case "location":
        window.open("https://www.google.com/maps?q=Travessa+10+de+Outubro+no.+9,+Palapasso+-+Dili,+Timor-Leste", "_blank");
        break;
      case "phone":
        window.location.href = "https://wa.me/+6285248209388";
        break;
      case "email":
        window.location.href = "mailto:bepi.management@gmail.com";
        break;
      default:
        break;
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
                <span
                  className="contact-icon fa fa-map-marker"
                  onClick={() => handleIconClick("location")}
                ></span>
                <p className="contact-text">
                  Travessa 10 de Outubro no. 9 <br /> Palapasso - Dili, Timor-Leste
                </p>
              </div>
              <div className="contact-dbox">
                <span
                  className="contact-icon fa fa-phone"
                  onClick={() => handleIconClick("phone")}
                ></span>
                <p className="contact-text">
                  <a href="https://wa.me/+6285248209388">+67077425220</a>
                </p>
              </div>
              <div className="contact-dbox">
                <span
                  className="contact-icon fa fa-paper-plane"
                  onClick={() => handleIconClick("email")}
                ></span>
                <p className="contact-text">
                  <a href="mailto:ferdinandluis88@gmail.com">
                    bepi.management@gmail.com
                  </a>
                </p>
              </div>
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