import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./herosection.css";
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
import Ten from "./img/ten.png";
import Tate from "./img/tate.png";
import Flats from "./img/flats.png";
import Residential from "./img/residential.png";
import School from "./img/school.png";
import Bedroom from "./img/bedroom.png";
import Consult from "./img/consult.png";
import Concept from "./img/concept.png";
import Design from "./img/design.png";
import Permit from "./img/permit.png";
import { SectorsImage } from "./sectors-images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { BuildImages } from "./build-images";

function Herosection() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="Hero-section">
      <div className="container">
        <div className="texts">
          <div className="dream">BUILDING YOUR DREAM HOME</div>
          <div className="vision">Your Vision, Our Expertise</div>
          <button className="show">Build with us</button>
        </div>
      </div>
      <div className="hero">
        <h2>OUR SECTORS</h2>
        <div className="images">
          <SectorsImage
            image={Denver}
            number={"01"}
            text="Architectural designs and consult"
          />
          <SectorsImage image={Project} number={"02"} text="Construction" />
          <SectorsImage
            image={Architecture}
            number={"03"}
            text="Project management"
          />
          <SectorsImage image={Light} number={"04"} text="Interior Design" />
        </div>
      </div>
      <div className="company">
        <h2 className="trustee">TRUSTED BY OVER 200+ COMPANIES</h2>
        <div className="companies">
          <img src={Pipedrive} className="comp" />
          <img src={Razorpay} className="comp" />
          <img src={Rippling} className="comp" />
          <img src={Attentive} className="comp" />
          <img src={Sonos} className="sonos" />
          <img src={Ghost} className="ghost" />
        </div>
      </div>
      <div className="hero-section">
        <div className="upper">
          <img src={Ten} className="ten" />
          <h1 className="success">
            YEARS OF SUCCESSFUL <br /> WORK
            <span style={{ color: "#FF7D00" }}> IN THE MARKET</span>
          </h1>
        </div>
        <div className="numbers">
          <div className="seventy">
            <h2 className="nums">72</h2>
            <p className="paragraph">Projects Completed</p>
          </div>
          <div className="seventy">
            <h2 className="nums">130</h2>
            <p className="paragraph">Square Feet</p>
          </div>
          <div className="seventy">
            <h2 className="nums">35</h2>
            <p className="paragraph">Clients Nationwide</p>
          </div>
        </div>
        <div className="explore">
          <h3>
            To explore and go after new ways to build, we’ve gathered the
            people, innovations, and partnerships <br />
            <span>that can anticipate and overcome new challenges</span>
          </h3>
          <button className="build">Build with us</button>
        </div>

        <div className="portfolio">
          <div className="our-portfolio">
            <h2>OUR PORTFOLIO</h2>
            <Carousel
              responsive={responsive}
              containerClass="container-carousel"
              autoPlay={true}
              autoPlaySpeed={2000}
            >
              <div className="tate">
                <h2>MINI ESTATE IN UYO</h2>
                <p>ENGINEERING</p>
                <img src={Tate} className="portfolio-images" />
              </div>
              <div className="tate">
                <h2>3 BEDROOM FLAT</h2>
                <p>CONSTRUCTION</p>
                <img src={Bedroom} className="portfolio-images" />
              </div>
              <div className="tate">
                <h2>BLOCK OF FLATS</h2>
                <p>INTERIOR</p>
                <img src={Flats} className="portfolio-images" />
              </div>

              <div className="tate">
                <h2>RESIDENTIAL PROPERTY</h2>
                <p>ARCHITECTURE</p>
                <img src={Residential} className="portfolio-images" />
              </div>
              <div className="tate">
                <h2>SCHOOL BUILDING</h2>
                <p>ARCHITECTURE</p>
                <img src={School} className="portfolio-images" />
              </div>
              <div className="tate">
                <h2>3 BEDROOM FLAT</h2>
                <p>CONSTRUCTION</p>
                <img src={Bedroom} className="portfolio-images" />
              </div>
            </Carousel>

            <div className="view-more-button">
              <button className="btn">
                view more
                <span>
                  <FontAwesomeIcon icon={faArrowRight} className="arrow" />
                </span>
              </button>
            </div>
          </div>

          <div className="ready">
            <h3>
              Ready to build <br /> together?
            </h3>
            <div className="Build">
              <BuildImages
                image={Consult}
                number={"1"}
                subtitle="Consultation & initial meeting"
                text="We meet with you to discuss your project needs, budget and timeline. We may also visit the site to get..."
              />
              <BuildImages
                image={Concept}
                number={"2"}
                subtitle="Concept design"
                text="Based on your requirements, we create a concept design that outlines the overall vision of the project...."
              />
              <BuildImages
                image={Design}
                number={"3"}
                subtitle="Design development"
                text="Once you approve the concept design, we begin to develop detailed drawings and plans. This may involve co....."
              />
              <BuildImages
                image={Permit}
                number={"4"}
                subtitle="Permitting & approvals"
                text="We obtain the necessary permits and approvals from local authorities. After approval is gotten, we begin..."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Herosection;
