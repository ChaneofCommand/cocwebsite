import React, { Component } from "react";
import "./App.css";
import { HashRouter, BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';

import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";
import Markforged from "./components/Case_Study_Template//Case_Studies/Markforged";
import Kith from "./components/Case_Study_Template/Case_Studies/Kith";
import NorthFace from "./components/Case_Study_Template/Case_Studies/NorthFace";
import GovBall from "./components/Case_Study_Template/Case_Studies/GovBall";
import Lolla from "./components/Case_Study_Template/Case_Studies/Lolla";
import Happify from "./components/Case_Study_Template/Case_Studies/Happify";
import Amazon from "./components/Case_Study_Template/Case_Studies/Amazon";
import Busch from "./components/Case_Study_Template/Case_Studies/Busch";
import CrimeCon from "./components/Case_Study_Template/Case_Studies/CrimeCon";
import BirdsOfPrey from "./components/Case_Study_Template/Case_Studies/BOP";
import Hunter from "./components/Case_Study_Template/Case_Studies/Hunter";
import Footer from "./components/Footer";
import HeaderFooter from "./Pages/HeaderFooter";
import ReactDOMServer from "react-dom/server";

import AdidasConcepts from "./components/Case_Study_Template/Case_Studies/AdidasConcepts";
import Brown from "./components/Case_Study_Template/Case_Studies/Brown";
import Celgene from "./components/Case_Study_Template/Case_Studies/Celgene";
import Gentle from "./components/Case_Study_Template/Case_Studies/Gentle";
import CanadaG from "./components/Case_Study_Template/Case_Studies/CanadaG";
import HipHop from "./components/Case_Study_Template/Case_Studies/HipHop";
import Lexus from "./components/Case_Study_Template/Case_Studies/Lexus";
import LululemonFoot from "./components/Case_Study_Template/Case_Studies/LululemonFoot";
import LululemonF from "./components/Case_Study_Template/Case_Studies/LululemonF";
import LululemonS from "./components/Case_Study_Template/Case_Studies/LululemonS";
import Lululemon from "./components/Case_Study_Template/Case_Studies/Lululemon";
import Rodarte from "./components/Case_Study_Template/Case_Studies/Rodarte";
import UberEats from "./components/Case_Study_Template/Case_Studies/UberEats";
import Ouai from "./components/Case_Study_Template/Case_Studies/Ouai";
import Accenture from "./components/Case_Study_Template/Case_Studies/Accenture";
import AdidasCreator from "./components/Case_Study_Template/Case_Studies/AdidasCreator";
import GoogleP from "./components/Case_Study_Template/Case_Studies/GoogleP";
import WNBA from "./components/Case_Study_Template/Case_Studies/WNBA";
/*
          <Route path= {`${process.env.PUBLIC_URL}/`} element ={<Gallery />} />
          <Route path={`${process.env.PUBLIC_URL}/about`} element= { <About />} />
          <Route path={`${process.env.PUBLIC_URL}/contact`} element={  <Contact />} />
          <Route path={`${process.env.PUBLIC_URL}/markforged`} element={<Markforged />} />


          <Route path='/about' element= { <About />} />
          <Route path='/contact' element={  <Contact />} />
          <Route path='/markforged' element={<Markforged />} />
          <Route path= '/' element ={<Gallery />} />
          https://chaneofcommand.github.io/cocwebsite/
          */
/*basename={process.env.PUBLIC_URL} */
function App() {
  return (
    <HelmetProvider>
      <HashRouter>
        <HeaderFooter />
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/markforged" element={<Markforged />} />
          <Route path="/kith" element={<Kith />} />
          <Route path="/northface" element={<NorthFace />} />
          <Route path="/govball" element={<GovBall />} />
          <Route path="/lolla" element={<Lolla />} />
          <Route path="/happify" element={<Happify />} />
          <Route path="/amazon" element={<Amazon />} />
          <Route path="/busch" element={<Busch />} />
          <Route path="/crimecon" element={<CrimeCon />} />
          <Route path="/birdsofprey" element={<BirdsOfPrey />} />
          <Route path="/hunter" element={<Hunter />} />
          <Route path="/adidasc" element={<AdidasCreator />} />
          <Route path="/adidascon" element={<AdidasConcepts />} />
          <Route path="/brown" element={<Brown />} />
          <Route path="/celgene" element={<Celgene />} />
          <Route path="/gentle" element={<Gentle />} />
          <Route path="/canadag" element={<CanadaG />} />
          <Route path="/googlep" element={<GoogleP />} />
          <Route path="/hiphop" element={<HipHop />} />
          <Route path="/lexus" element={<Lexus />} />
          <Route path="/luluemonfoot" element={<LululemonFoot />} />
          <Route path="/lululemonfurther" element={<LululemonF />} />
          <Route path="/lulumeonstudio" element={<LululemonS />} />
          <Route path="/lululemonwundermost" element={<Lululemon />} />
          <Route path="/ouai" element={<Ouai />} />
          <Route path="/rodarte" element={<Rodarte />} />
          <Route path="/ubereats" element={<UberEats />} />
          <Route path="/accenture" element={<Accenture />} />
          <Route path="/wnba" element={<WNBA />} />
        </Routes>
        <Footer />
      </HashRouter>
    </HelmetProvider>
  );
}
ReactDOMServer.renderToString(<App />);
export default App;
