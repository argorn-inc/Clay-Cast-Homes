import React from 'react';
import './portfolio.css';
import Navbar from '../HomePage/navbar';
import { Data } from './data';
import { PortfolioImage } from './portfolio-images';
import Rectanglebg from './img/Rectangle-bg.png'
import Contact from '../HomePage/Contact-Us';
import Footer from '../HomePage/Footer';
import { Link } from 'react-router-dom';


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
          {Data.map((dataContent) => (
            <Link to={`/page/${dataContent.id}`} key={dataContent}>
              <div key={dataContent.id} className="portfolio-cards">
                <img src={dataContent.image} className="port-images" />
                <h3 className="port-card">{dataContent.title}</h3>
                <p className="port-card">{dataContent.paragraph}</p>
              </div>
            </Link>
          ))}
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
        <Footer />
      </div>
    </div>
  );
}

export default Portfolio;