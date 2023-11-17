import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Logo from "./img/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const openNav = () => {
    setOpen(!open);
  };
  return (
    <div>
      <nav className={`navbar ${open ? "active" : ""}`}>
        <div className="navTop">
          <Link to="/">
            <img className="logo" src={Logo} />
          </Link>

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
              <Link to="/contact" style={{ textDecoration: "none" }}>
                <li className="nav-items">
                  <a>CONTACTS</a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
