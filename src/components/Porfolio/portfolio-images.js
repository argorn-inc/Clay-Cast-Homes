import React from "react";
import "./portfolio.css";

export const PortfolioImage = ({ image, title, paragraph }) => {
  return (
    <div className="portfolio-cards">
      <img src={image} className="port-images"/>
      <h3 className="port-card">{title}</h3>
      <p className="port-card">{paragraph}</p>
    </div>
  );
};
