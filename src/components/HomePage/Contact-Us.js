import React from "react";
import "./Contact-Us.css";
import Location from "./img/location.png";
import Call from "./img/call.png";
import Email from "./img/email.png";

function Contact() {
  return (
    <div>
      <div className="contact-us-section">
        <div className="contact-us">
          <h2>CONTACT US</h2>
        </div>
        <div className="contact-form">
          <div className="first-part">
            <div className="contact-page">
              <h2>Let’s get started with your project</h2>
              <p>
                Together, let's shape a world where architectural marvels meet
                human ingenuity.
              </p>
            </div>
            <div className="contacts-icon">
              <div className="call">
                <img src={Call} className="icons-contact" />
                <span className="contact-texts">
                  +234 81-9015879 / 70-8387377
                </span>
              </div>
              <div className="email">
                <img src={Email} className="icons-contact" />
                <span className="contact-texts">
                  claycastproperties33@gmail.com
                </span>
              </div>
              <div className="location">
                <img src={Location} className="icons-contact" />
                <span className="contact-texts">Jos, Nigeria</span>
              </div>
            </div>
          </div>
          <form className="part-two">
            <div className="name-email">
              <div className="name-field">
                <input name="name" type="text" placeholder="Name" />
              </div>
              <div className="email-field">
                <input name="email" type="text" placeholder="Email" />
              </div>
            </div>
            <div className="input-group">
              <textarea
                id="Message"
                name="Message"
                class="form-control"
                rows="6"
                maxlength="3000"
                placeholder="Type message here"
                required
              ></textarea>
            </div>
            <button className="form-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Contact;