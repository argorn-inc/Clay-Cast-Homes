import React from "react";
import "./contact-us.css";
import Map from "./img/Rectangle 107.png";
import Navbar from "../HomePage/navbar";
import Contact from "../HomePage/Contact-Us";
import Footer from "../HomePage/Footer";


function ContactUs() {
  return (
    <div>
      <Navbar />
      <div className="Contact-Page">
        <h1 className="get-in-touch">Get in Touch</h1>
        <div className="map">
          <img src={Map} className="map-image" />
        </div>
        <div className="contact-at-contact">
          <Contact />
        </div>
        <div className="contact-footer">
          <Footer />
        </div>
      </div>
    </div>
  ); 
}

export default ContactUs;
