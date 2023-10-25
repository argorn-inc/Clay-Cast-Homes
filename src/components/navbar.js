import './navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,faTimes } from "@fortawesome/free-solid-svg-icons";

import Logo from "./img/logo.png";
import Home from "./img/Home.png";
import { useState } from 'react';

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
              {open ? (
                <FontAwesomeIcon icon={faTimes} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
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
        {/* <img className="HOME" src={Home} /> */}
        <div className="texts">
          <div className="vision">Your Vision, Our Expertise</div>
          <div className="dream">BUILDING YOUR DREAM HOME</div>
          <button className="show">view our portfolio</button>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
