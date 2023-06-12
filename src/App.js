import React from "react";
import "./App.css";
import { BrowserRouter as HashRouter, Route, Routes } from "react-router-dom";
import Gallery from "./components/Gallery/Gallery";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Markforged from "./components/Case_Study_Template/Markforged"
import Home from "./Pages";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
     
     
      <HashRouter>
      <Home />
      
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/markforged" element={<Markforged />} />
        </Routes>
        <Footer />
      </HashRouter>
      
    </>
  );
}

export default App;
