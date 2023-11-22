import React from 'react';
import './portfolio.css';
import Navbar from '../HomePage/navbar';
import { PortfolioImage } from './portfolio-images';
import Residential from './img/Rectangle 10.png';
import SchoolProperty from './img/Rectangle 10-2.png';
import BedroomFlats from './img/Rectangle 10-3.png';
import bedroomflat from './img/Rectangle 10-4.png';
import BlockFlats from './img/Rectangle 10-5.png';
import ResidentialProperty from './img/Rectangle 10-6.png';
import Rectanglebg from './img/Rectangle-bg.png'
import Contact from '../HomePage/Contact-Us';
import Footer from '../HomePage/Footer';


function Portfolio() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="porfolio-image-text">
        <img src={Rectanglebg} className="rectangle-bg" />
        <h1 className="transbox">PORTFOLIO</h1>
      </div>
      <div>
        <h1 className="portfolio-sectors">Our Sectors</h1>
        <div className="portfolio-images-reused">
          <PortfolioImage
            image={Residential}
            title="Residentia Property"
            paragraph="This project was located in Asaba, Delta State. 
          We provided the client with Architectural designs, interiors, 3dimension  views and construction of the project."
          />
          <PortfolioImage
            image={SchoolProperty}
            title="School Property"
            paragraph="This project was located in Asaba, Delta State. 
          We provided the client with Architectural designs, interiors, 3dimension  views and construction of the project."
          />
          <PortfolioImage
            image={BedroomFlats}
            title={"Residentia Property"}
            paragraph="This project was located in Asaba, Delta State. 
          We provided the client with Architectural designs, interiors, 3dimension  views and construction of the project."
          />
          <PortfolioImage
            image={bedroomflat}
            title={"Residentia Property"}
            paragraph="This project was located in Asaba, Delta State. 
          We provided the client with Architectural designs, interiors, 3dimension  views and construction of the project."
          />
          <PortfolioImage
            image={BlockFlats}
            title={"Residentia Property"}
            paragraph="This project was located in Asaba, Delta State. 
          We provided the client with Architectural designs, interiors, 3dimension  views and construction of the project."
          />
          <PortfolioImage
            image={ResidentialProperty}
            title={"Residentia Property"}
            paragraph="This project was located in Asaba, Delta State. 
          We provided the client with Architectural designs, interiors, 3dimension  views and construction of the project."
          />
        </div>
      </div>
      <div className="portfolioback">
        <h2>
          Clay Cast Properties is more than just architecture, interior design,
          and construction. We are the spaces in between and the possibilities
          beyond them all.
        </h2>
      </div>
      <div className="portfolio-contact">
        <Contact />
      </div>
      <div className="portfolio-footer">
        <Footer/>
      </div>
    </div>
  );
}

export default Portfolio;