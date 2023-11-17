import "./our-story.css";
import React, { useState } from "react";
import styled from "styled-components";
import Profile from "./img/profile image.png";
import Background from "./img/profile background.png";


const Tab = styled.button`
  font-size: 20px;
  padding: 10px 60px;
  cursor: pointer;
  opacity: 0.6;
  background: white;
  border: 0;
  outline: 0;
  ${({ active }) =>
    active &&
    `
     border-bottom: 2px solid black;
    opacity: 1;
     
    
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
  gap:10px
  font-size:10px
`;
const types = ["History", "Mission", "Vision"];

function OurStory() {
  const [active, setActive] = useState(types[0]);

  return (
    <div>
      <div>
        <div className="our-story">
          <h1>OUR STORY</h1>
          <h2>
            Designing the future, today - welcome to our <br /> architecture
          </h2>
        </div>

        <div className="back-profile">
          <img src={Background} className="background" />
        </div>
        <img src={Profile} className="profile" />
        <div className="buttongroup">
          <ButtonGroup className="b-group">
            {types.map((type) => (
              <Tab
                key={type}
                active={active === type}
                onClick={() => setActive(type)}
                className="dash"
              >
                {type}
              </Tab>
            ))}
          </ButtonGroup>
          <p className="tabs">
            We meet with you to discuss your project needs, budget and timeline.
            We may also visit the site to get We meet with you to discuss your
            project needs, budget and timeline. We may also visit the site to
            get We meet with you to discuss your project needs, budget and
            timeline.
          </p>
        </div>
        
      </div>
    </div>
  );
}
export default OurStory;
