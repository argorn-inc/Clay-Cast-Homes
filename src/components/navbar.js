import './navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faTimes } from "@fortawesome/free-solid-svg-icons";

import Logo from "./img/logo.png";
import React, { useState } from 'react';

function Navbar() {
const [open,setOpen]=useState(false);
const openNav =()=>{
  setOpen(!open)
}
  return (
    <div>
      <nav className={`navbar ${open ? "active" : ""}`}>
        <div className="navTop">
          <img className="logo" src={Logo} />

          <div>
            <div className="menu-icon" onClick={openNav}>
              <span>
                Menu
                {open ? (
                  <FontAwesomeIcon icon={faTimes} />
                ) : (
                  <FontAwesomeIcon icon={faBars} className="fabar" />
                )}
              </span>
            </div>
            <ul className={`nav-element ${open ? "active" : ""}`}>
              <li className="nav-items">
                <a className="home">HOME</a>
              </li>
              <li className="nav-items">
                <a>ABOUT</a>
              </li>
              <li className="nav-items">
                <a>PORTFOLIO</a>
              </li>
              <li className="nav-items">
                <a>SERVICES</a>
              </li>
              <li className="nav-items">
                <a>CONTACTS</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="texts">
          <div className="dream">BUILDING YOUR DREAM HOME</div>
          <div className="vision">Your Vision, Our Expertise</div>
          <button className="show">Build with us</button>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
