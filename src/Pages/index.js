import React, {useState} from 'react';
import Navbar from '../components/Navbar/Navbar';
import Gallery from '../components/Gallery/Gallery';
import Footer from '../components/Footer/Footer';
const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
      setIsOpen(!isOpen)  
    };
  return (
    <>
       <Navbar toggle={toggle} />
       <Gallery/>
       <Footer/>
    </>
  );
};
export default Home