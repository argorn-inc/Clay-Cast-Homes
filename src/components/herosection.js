import './herosection.css';
import Denver from "./img/denver.png";
import Light from "./img/light 1.png";
import Architecture from "./img/architecture.png";
import Project from "./img/project-plan 1.png";
import Razorpay from "./img/Company logo.png";
import Pipedrive from "./img/pipedrive.png";
import Rippling from "./img/rippling.png";
import Attentive from "./img/attentive.png";
import Sonos from "./img/sonos.png";
import Ghost from "./img/ghost.png";
import Rectangle from "./img/rectangle.png";
import Ten from "./img/ten.png";

function Herosection(){
    return (
      <div>
        <div>
          <h2 className="sectors">OUR SECTORS</h2>
          <div className="images">
            <div className="denver">
              <h3>01</h3>
              <img src={Denver} />
              <p>Architectural designs and consult</p>
            </div>
            <div className="project">
              <h3>02</h3>
              <img src={Project} />
              <p>Construction</p>
            </div>
            <div className="archi">
              <h3>03</h3>
              <img src={Architecture} />
              <p>Project management</p>
            </div>
            <div className="light">
              <h3>04</h3>
              <img src={Light} />
              <p>Interior Design</p>
            </div>
          </div>
        </div>
        <div className="company">
          <h2 className="trustee">TRUSTED BY OVER 200+ COMPANIES</h2>
          <div className="companies">
            <img src={Pipedrive} />
            <img src={Razorpay} />
            <img src={Rippling} />
            <img src={Attentive} />
            <img src={Sonos} />
            <img src={Ghost} />
          </div>
        </div>
        <div className="hero-section">
          <img src={Rectangle} className="rectangle" />
          <div className="upper">
            <img src={Ten} className="ten" />
            <h1 className="success">
              YEARS OF SUCCESSFUL <br /> WORK
              <span style={{ color: "#FF7D00" }}> IN THE MARKET</span>
            </h1>
          </div>
          <div className="numbers">
            <div>
              <h2 className="seventy-two">72</h2>
              <p className="paragraph">Projects Completed</p>
            </div>
            <div className="seventy">
              <h2 className="square">130</h2>
              <p className="paragraph">Square Feet</p>
            </div>
            <div className="seventy">
              <h2 className="client">35</h2>
              <p className="paragraph">Clients Nationwide</p>
            </div>
          </div>
          <div>
            <h3 className="explore">
              To explore and go after new ways to build, we’ve gathered the
              people, innovations, and partnerships <br />
              <span style={{ marginLeft: 170 }}>
                that can anticipate and overcome new challenges
              </span>
            </h3>
            <button className="build">build with us</button>
          </div>
        </div>
      </div>
    );
}
export default Herosection;