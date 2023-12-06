import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactPage from "./components/ContactPage/contact-us";
import Home from './components/HomePage/index';
import Portfolio from "./components/Porfolio/portfolio";
import DeltaState from "./components/About/deltastate-property";
import Services from "./components/Porfolio/services";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/deltastate" element={<DeltaState />} />
        <Route path="/page/:id" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
