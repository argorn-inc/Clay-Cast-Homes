import React from "react";
import "./herosection.css";

export const BuildImages = ({ image, number,subtitle,text }) => {
  return (
    <div className="Build-process">
      <h3>{number}</h3>
      <img src={image} className="build-images"/>
      <h2>{subtitle}</h2>
      <p>{text}</p>
    </div>
  );
};
export default BuildImages;
