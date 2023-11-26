import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactPage from "./components/ContactPage/contact-us";
import Home from './components/HomePage/index';
import Portfolio from "./components/Porfolio/portfolio";
import About from "./components/About/about";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
