import React, { Component } from 'react';
import "./App.css";
import { HashRouter, BrowserRouter, Route, Routes,} from "react-router-dom";

import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";
import Markforged from "./components/Case_Study_Template//Case_Studies/Markforged";
import Kith from "./components/Case_Study_Template/Case_Studies/Kith"
import NorthFace from "./components/Case_Study_Template/Case_Studies/NorthFace"
import GovBall from "./components/Case_Study_Template/Case_Studies/GovBall"
import Lolla from "./components/Case_Study_Template/Case_Studies/Lolla"
import Happify from "./components/Case_Study_Template/Case_Studies/Happify"
import Amazon from "./components/Case_Study_Template/Case_Studies/Amazon"
import Busch from "./components/Case_Study_Template/Case_Studies/Busch"
import CrimeCon from "./components/Case_Study_Template/Case_Studies/CrimeCon"
import BirdsOfPrey from "./components/Case_Study_Template/Case_Studies/BOP"
import Hunter from "./components/Case_Study_Template/Case_Studies/Hunter"
import Footer from "./components/Footer";
import HeaderFooter from "./Pages/HeaderFooter";
import  ReactDOMServer from 'react-dom/server'
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
    <>
    
     
      <HashRouter>
      <HeaderFooter />
        <Routes>
          <Route path = '/' element ={ <Gallery />} />
          <Route path = '/about' element = { <About />} />
          <Route path = '/contact' element ={  <Contact />} />
          <Route path = '/markforged' element ={<Markforged />} />
          <Route path = '/kith' element ={<Kith />} />
          <Route path = '/northface' element ={<NorthFace />} />
          <Route path = '/govball' element ={<GovBall />} />
          <Route path = '/lolla' element ={<Lolla />} />
          <Route path = '/happify' element ={<Happify />} />
          <Route path = '/amazon' element ={<Amazon />} />
          <Route path = '/busch' element ={<Busch />} />
          <Route path = '/crimecon' element ={<CrimeCon />} />
          <Route path = '/birdsofprey' element ={<BirdsOfPrey />} />
          <Route path = '/hunter' element ={<Hunter />} />
          
        </Routes>
        <Footer />
      </HashRouter>
      
    </>
  );
}
ReactDOMServer.renderToString(<App/>)
export default App;