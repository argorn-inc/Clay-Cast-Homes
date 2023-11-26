import React from "react";
import "./about.css";

const Project = ({ image, title, paragraph }) => {
  return (
    <div className="about-cards">
      <img src={image} className="about-picture" />
      <h3 className="about-card">{title}</h3>
      <p className="about-cards">{paragraph}</p>
    </div>
  );
};
export default Project;
