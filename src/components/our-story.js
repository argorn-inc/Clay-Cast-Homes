// import "./our-story.css";
// import React, { useState } from "react";
// import styled from "styled-components";
// import Profile from "./img/profile image.png";
// import Background from "./img/profile background.png";


// const Tab = styled.button`
//   font-size: 20px;
//   padding: 10px 50px;
//   cursor: pointer;
//   opacity: 0.6;
//   background: white;
//   border: 0;
//   outline: 0;
//   ${({ active }) =>
//     active &&
//     `
//     border-bottom: 2px solid black;
//     opacity: 1;
//   `}
// `;
// const ButtonGroup = styled.div`
//   display: flex;
//   gap:100px
// `;
// const types = ["History", "Mission", "Vision"];


// function OurStory(){
//       const [active, setActive] = useState(types[0]);

//     return (
//       <div>
//         <div>
//           <div className="our-story">
//             <h1>OurStory</h1>
//             <h2>
//               Designing the future, today - welcome to our <br /> architecture
//             </h2>
//           </div>

//           <div>
//             <img src={Background} className="background" />
//             <img src={Profile} className="profile" />
//           </div>
//           <div className="buttongroup">
//             <ButtonGroup className="b-group">
//               {types.map((type) => (
//                 <Tab
//                   key={type}
//                   active={active === type}
//                   onClick={() => setActive(type)}
//                 >
//                   {type}
//                 </Tab>
//               ))}
//             </ButtonGroup>
//             <p />
//             <p className="tabs">
//               We meet with you to discuss your project needs, budget and
//               timeline. We may also visit the site to get We meet with you to
//               discuss your project needs, budget and timeline. We may also visit
//               the site to get We meet with you to discuss your project needs,
//               budget and timeline. We may also visit the site to get... : We
//               meet with you to discuss your project needs, budget and timeline.
//               We may also visit the site to get.
//             </p>
//           </div>
//           {/* <h2>hhhhhhh</h2> */}
//         </div>
//       </div>
//     );
// }
// export default OurStory;
