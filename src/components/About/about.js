import React from "react";
import "./about.css";
import Navbar from "../HomePage/navbar";
import Project from "./about-projects";
import AboutBackground from "./img/Rectangle 122.png";
import AboutProjectImage from "./img/Rectangle 90.png";
import Frame1 from "./img/Frame1.png";
import Frame2 from "./img/Frame2.png";
import Frame3 from "./img/Frame3.png";
import Frame4 from "./img/Frame4.png";
import Frame130 from "./img/Frame 136 (1).png";
import Rectangle1 from "./img/Rectangle1.png";
import Rectangle2 from "./img/Rectangle2.png";
import Rectangle3 from "./img/Rectangle3.png";
import Contact from "../HomePage/Contact-Us";
import Footer from "../HomePage/Footer";
function About() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="about-herosection">
        <img src={AboutBackground} className="about-bg" />
        <h1 className="asaba-property">Residential Property in Asaba</h1>
      </div>
      <div className="about-section-about">
        <div className="about-row">
          <div>
            <h1 className="aboutProject"> About Project</h1>
            <h2 className="about-propert-content">
              This project was located in Asaba, Delta State. We provided the
              client with Architectural designs, interiors, 3dimension views and
              construction of the project.
            </h2>
            <div className="content-at-about">
              <div className="client-tusa">
                <p className="client">Client:</p>
                <p className="mr-etusa">Mr Etusa</p>
              </div>
              <div className="location-asaba">
                <p className="locatioon">Location:</p>
                <p className="delta-house">Asaba, Delta State</p>
              </div>
              <div className="residential-Type">
                <p className="typpe">Type:</p>
                <p className="residentalPropert">Residential property</p>
              </div>
              <div className="about-status">
                <p className="client">Status:</p>
                <p className="mr-etusa">On-Site</p>
              </div>
              <div className="client-feedback">
                <p className="feedback-title">Client Feedback:</p>
                <p className="feedback">
                  I was pleasantly surprised at the efficiency and speed of
                  execution by Clay Cast Properties. I will particularly commend
                  them for their impeccable communication during the project
                  lifecycle.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img src={AboutProjectImage} className="aboutprojectimage" />
          </div>
        </div>
        <div className="images-at-About">
          <img src={Frame1} className="about-image" />
          <img src={Frame2} className="about-image" />
          <img src={Frame3} className="about-images" />
          <img src={Frame4} className="about-images" />
        </div>
        <div>
          <button className="view-all-projects">View all Projects</button>
        </div>
        <div className="about-pictures">
          <Project
            image={Rectangle1}
            title={"Block of Flats"}
            paragraph={
              "A private residence for a client in  Uyo, Akwa Ibom State."
            }
          />
          <Project
            image={Rectangle2}
            title={"Primary Care Center"}
            paragraph={
              "We built a block of 2 bedroom flats for this Client in the city of Abuja.."
            }
          />
          <Project
            image={Rectangle3}
            title={"Block of 2 Bedroom Flats"}
            paragraph={
              "A private residence for a client in  Uyo, Akwa Ibom State ."
            }
          />
        </div>
        <div className="aboutBack">
          <h2>
            Clay Cast Properties is more than just architecture, interior
            design, and construction. We are the spaces in between and the
            possibilities beyond them all.
          </h2>
        </div>
        <div className="contact-at-about">
          <Contact/>
        </div>
        <div className="footer-at-about">
          <Footer/>  
        </div>
      </div>
    </div>
  );
}
export default About;
