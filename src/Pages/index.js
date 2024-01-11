import React from "react";
import "./App.css";
import { HashRouter, BrowserRouter, Route, Routes } from "react-router-dom";
import Gallery from "./components/Gallery/index";
import About from "./components/About/index";
import Contact from "./components/Contact/index";
import Markforged from "./components/Case_Study_Template/Markforged"
import Home from "./Pages/HeaderFooter";
import Footer from "./components/Footer/index";
 /*basename={process.env.PUBLIC_URL} */
function App() {
  return (
    <>
    
     
      <BrowserRouter basename={'/chane_of_command_website/src/components'}>
      <Home />
      
        <Routes>
          <Route path= {`${process.env.PUBLIC_URL}/`} element ={<Gallery />} />
          <Route path={`${process.env.PUBLIC_URL}/about`} element= { <About />} />
          <Route path={`${process.env.PUBLIC_URL}/contact`} element={  <Contact />} />
          <Route path={`${process.env.PUBLIC_URL}/markforged`} element={<Markforged />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </>
  );
}