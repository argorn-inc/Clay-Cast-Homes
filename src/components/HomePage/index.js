import React from "react";
import Navbar from "./navbar";
import Herosection from "./herosection";
import OurStory from "./our-story";
import Contact from "./Contact-Us";
import Footer from "./Footer";

function Home(){
    return (
<div>
   <Navbar/>
   <Herosection/>
   <OurStory/>
   <Contact/>
   <Footer/>

</div>
    )
}
export  default Home;
