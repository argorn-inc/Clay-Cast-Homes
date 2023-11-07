import React from 'react';
import "./herosection.css";



export const SectorsImage = ({image,number,text}) => {
  return (
    <div className="image">
      <h3>{number}</h3>
      <img src={image}/>
      <p>{text}</p>
    </div>
  );
}
