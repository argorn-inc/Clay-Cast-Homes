import './navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Logo from "./img/logo.png";
import Home from "./img/Home.png";

function Navbar() {
  return (
    <div>
      <nav>
        <div className="navTop">
          <img className="logo" src={Logo} />
          <div className="elements">
            <ul>
              <li>
                <a className="home">HOME</a>
              </li>
              <li>
                <a>ABOUT</a>
              </li>
              <li>
                <a>PORTFOLIO</a>
              </li>
              <li>
                <a>SERVICES</a>
              </li>
              <li>
                <a>CONTACTS</a>
              </li>
            </ul>

            <FontAwesomeIcon icon={faBars} className="menu" />
          </div>
        </div>
      </nav>
      <div className="container">
        <img className="HOME" src={Home} />
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
