import React from "react";
import "./deltastate-property.css"
import { useParams } from "react-router-dom";
import Navbar from "../HomePage/navbar";
import Contact from "../HomePage/Contact-Us";
import Footer from "../HomePage/Footer";
import Project from "./about-projects";
import AboutBackground from "./img/Rectangle 122.png";
import AsabaBackground from "./img/IMG-20230731-WA0021.jpg";
import AsabaAbout from "./img/Rectangle 90.png";
import Frame1 from "./img/Frame1.png";
import Frame2 from "./img/Frame2.png";
import Frame3 from "./img/Frame3.png";
import Frame4 from "./img/Frame4.png";
import Rectangle1 from "./img/delta-rectangle1.png";
import Rectangle2 from "./img/Rectangle2.png"
import Rectangle3 from "./img/delta-rectangle3.png";
import SchoolBackground from "./img/schoolBackground.png";
import SchoolAbout from "./img/school-about.png";
import SchoolFrame from "./img/school-Frame1.png";
import SchoolFrame2 from "./img/school-frame2.png";
import schoolFrame3 from "./img/Schhol-frame3.png";
import AbujaBackground from "./img/AbujaBackground.png";
import AbujaAbout from "./img/abuja-about.png";
import AbujaFrame1 from "./img/abuja-frame1.png";
import AbujaFrame2 from "./img/abuja-frame2.png";
import AbujaFrame3 from "./img/abuaj-frame3.png";
import AbujaFrame4 from "./img/abuja-frame4.png";
import DeltaBackground from "./img/DeltaBackground.png";
import DeltaAbout from "./img/delta-about.png";
import DeltaFrame1 from "./img/delta-frame1.png";
import DeltaFrame2 from "./img/delta-frame2.png";
import DeltaFrame3 from "./img/delta-frame3.png";
import DeltaFrame4 from "./img/delta-frame4.png";
import AkwaBackground from "./img/AkwaBackground.png";
import AkwaAbout from "./img/akwa-about.png";
import AkwaFrame1 from "./img/akwa-frame1.png";
import AkwaFrame2 from "./img/akwa-frame2.png";
import AkwaFrame3 from "./img/akwa-frame3.png";
import AkwaFrame4 from "./img/akwa-frame4.png";
import JosBackground from "./img/JosBackground.png";
import JosAbout from "./img/jos-about.png";
import JosFrame1 from "./img/jos-frame1.png";
import JosFrame2 from "./img/jos-frame2.png";
import JosFrame3 from "./img/jos-frame3.png";
import JosFrame4 from "./img/jos-frame1.png";

function DeltaState() {
  const { id } = useParams();

  const contentForId = {
    1: {
      header: "Residential property in Asaba",
      image: AsabaBackground,
      imageAbout: AsabaAbout,
      AboutProject:
        "This project was located in Asaba, Delta State. We provided the client with Architectural designs, interiors, 3dimension  views and construction of the project.",
      client: "Mr.Etusa",
      location: "Asaba, Delta State",
      type: "Residential property",
      status: "On-Site",
      feedback:
        "I was pleasantly surprised at the efficiency and speed of execution by Clay Cast Properties. I will particularly commend them for their impeccable communication during the project lifecycle.",
      Frame1: Frame1,
      Frame2: Frame2,
      Frame3: Frame3,
      Frame4: Frame4,
    },
    2: {
      header: "School property in Abuja",
      image: SchoolBackground,
      imageAbout: SchoolAbout,
      AboutProject:
        "This project was located in Gwagwalada, Abuja. We provided the client with Architectural designs, interiors, 3dimension  views and construction of the project.",
      client: "Mr Onyejiaka",
      location: "Gwagwalada, Abuja",
      type: "Commercial property",
      status: "On-Site",
      feedback:
        "The project went smoothly and the attention to details by the team was impressive..",
      Frame1: SchoolFrame,
      Frame2: SchoolFrame2,
      Frame3: schoolFrame3,
      Frame4: SchoolFrame,
    },
    3: {
      header: "Block of 2 Bedroom Flats in Abuja",
      image: AbujaBackground,
      imageAbout: AbujaAbout,
      AboutProject:
        "This is a 2 bedroom block of flats located in Trademore Estate, Lugbe, Abuja. We provided the client with Architectural designs, interiors, 3dimension  views and construction of the project.",
      client: "Mr.Aigbogun",
      location: "Lugbe, Abuja",
      type: "Residential property",
      status: "On-Site",
      feedback:
        "I was pleasantly surprised at the efficiency and speed of execution by Clay Cast Properties. I will particularly commend them for their impeccable communication during the project lifecycle.",
      Frame1: AbujaFrame1,
      Frame2: AbujaFrame2,
      Frame3: AbujaFrame3,
      Frame4: AbujaFrame4,
    },
    4: {
      header: "Shortlet Apartments in Delta State",
      image: DeltaBackground,
      imageAbout: DeltaAbout,
      AboutProject:
        "This project is located in Asaba, Delta State. We provided the client with Architectural designs, interiors, 3dimension  views and construction for his short-let apartment project.",
      client: "Mr Okolie",
      location: "Asaba, Delta State",
      type: "Commercial Development",
      status: "On-Site",
      feedback:
        "I was pleasantly surprised at the efficiency and speed of execution by Clay Cast Properties. I will particularly commend them for their impeccable communication during the project lifecycle.",
      Frame1: DeltaFrame1,
      Frame2: DeltaFrame2,
      Frame3: DeltaFrame3,
      Frame4: DeltaFrame4,
    },
    5: {
      header: "Block of Flats in Akwa Ibom State",
      image: AkwaBackground,
      imageAbout: AkwaAbout,
      AboutProject:
        "This project is located in the city of Uyo, Akwa Ibom State. We provided the client with Architectural designs, interiors, 3dimension  views and construction for his short-let apartment project.",
      client: "Mr.Elvis",
      location: "Uyo, Akwa Ibom State",
      type: "Residential property",
      status: "On-Site",
      feedback:
        "I was pleasantly surprised at the efficiency and speed of execution by Clay Cast Properties. I will particularly commend them for their impeccable communication during the project lifecycle.",
      Frame1: AkwaFrame1,
      Frame2: AkwaFrame2,
      Frame3: AkwaFrame3,
      Frame4: AkwaFrame4,
    },
    6: {
      header: "3 Bedroom Residential Property in Jos",
      image: JosBackground,
      imageAbout: JosAbout,
      AboutProject:
        "This project is located in Rayfield, Jos south,Plateau State. We provided the client with Architectural designs, interiors, 3dimension  views and construction for his short-let apartment project.",
      client: "Mr.Elvis",
      location: "Jos South, Plateau State",
      type: "Residential property",
      status: "On-Site",
      feedback:
        "I was pleasantly surprised at the efficiency and speed of execution by Clay Cast Properties. I will particularly commend them for their impeccable communication during the project lifecycle.",
      Frame1: JosFrame1,
      Frame2: JosFrame2,
      Frame3: JosFrame3,
      Frame4: JosFrame4,
    },
  };

  const selectedContent = contentForId[id];

  if (!selectedContent) {
    return <div>Content not found</div>;
  }

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="about-herosection">
        <img src={selectedContent.image} className="about-herosection" />
        <img src={AboutBackground} className="about-bg" />
        <h1 className="asaba-property">{selectedContent.header}</h1>
      </div>
      <div className="about-section-about">
        <div className="about-row">
          <div>
            <h1 className="aboutProject">AboutProject</h1>
            <h2 className="about-propert-content">
              {selectedContent.AboutProject}
            </h2>
            <div className="content-at-about">
              <div className="client-tusa">
                <p className="client">Client</p>
                <p className="mr-etusa">{selectedContent.client}</p>
              </div>
              <div className="location-asaba">
                <p className="locatioon">Location:</p>
                <p className="delta-house">{selectedContent.location}</p>
              </div>
              <div className="residential-Type">
                <p className="typpe">Type:</p>
                <p className="residentalPropert">{selectedContent.type}</p>
              </div>
              <div className="about-status">
                <p className="client">Status:</p>
                <p className="mr-etusa">{selectedContent.status}</p>
              </div>
              <div className="client-feedback">
                <p className="feedback-title">Client Feedback:</p>
                <p className="feedback">{selectedContent.feedback}</p>
              </div>
            </div>
          </div>
          <div>
            <img
              src={selectedContent.imageAbout}
              className="aboutprojectimage"
            />
          </div>
        </div>
        <div className="images-at-About">
          <img src={selectedContent.Frame1} className="about-image" />
          <img src={selectedContent.Frame2} className="about-image" />
          <img src={selectedContent.Frame3} className="about-images" />
          <img src={selectedContent.Frame4} className="about-images" />
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
          <Contact />
        </div>
        <div className="footer-at-about">
          <Footer />
        </div>
      </div>
    </div>
  );
}
export default DeltaState;
