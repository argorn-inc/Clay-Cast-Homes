import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactPage from "./components/ContactPage/contact-us";
import Home from './components/HomePage/index'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/" render={() => <HomePageComponents />} /> */}

        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
    // <div>
    //  <Navbar/>
    //  <Herosection/>
    //  <OurStory/>
    //  <Contact_Us/>
    //  <Footer/>
    // </div>
  );
}

export default App;
