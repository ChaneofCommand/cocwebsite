import React from "react";
import img1 from "../../Logos/COC_Logo_White_ScaledDown.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaBars } from "react-icons/fa";
import { animated, useSpring } from 'react-spring';
import "./nav.css";

import {
  Nav,
  NavbarContainer,
  NavItem,
  NavLink1,
  NavLink2,
  NavLink3,
  NavMenu,
  MobileIcon,
  NavCoCLogo,
  Column1,
  Column2,
  Column3,
  Column4,
  Column5,
  DropArrow,
  DropDown,
  DropListItem,
  DropUl,
  AnimatedDropDown,
} from "./Navbar_Components";
/*href ={`${process.env.PUBLIC_URL}/`} 
href = {`${process.env.PUBLIC_URL}/about`}
 href = {`${process.env.PUBLIC_URL}/contact`}
*/
const Navbar = ({ toggle }) => {
  const navigate = useNavigate();
  const [selectedKeyword, setSelectedKeyword] = useState(null);

  const handleClick = (keyword) => {
    // Navigate to Gallery and pass the selected keyword
    navigate("/", { state: { selectedKeyword: keyword } });
  };

  const handleReset = () => {
    // Navigate to Gallery and pass the selected keyword
    console.log("Resetting keyword");
    navigate("/", { state: { selectedKeyword: "All" } });
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };
  const [isOpen, setIsOpen] = useState(false);
  const handleDrop = () => setIsOpen(!isOpen);
 
  const animation = useSpring({
    config:{ duration: 200 },
    transform: isOpen ? "translate3D(0,0,0)" : "translate3D(0,-20px,0)",
    opacity: isOpen ? 1 : 0
  });
  return (
    <>
      <Nav>
        <NavbarContainer>
          <Column1 />
          <Column2>
            <Link to="/">
              <NavCoCLogo src={img1} />
            </Link>
          </Column2>
          <Column3 />
          <Column4>
            <MobileIcon onClick={toggle}>
              <FaBars />
            </MobileIcon>
            <NavMenu>
              <NavItem>
                <NavLink1  onClick={handleDrop} >SELECT WORKS</NavLink1>
                  

                {isOpen && (<AnimatedDropDown style={animation}>
        <DropUl>
                <DropListItem  to="/" onClick={() => { handleClick("All"); handleDrop();}}>All</DropListItem>
                  <DropListItem  onClick={() => { handleClick("Art Installation"); handleDrop(); }}>Art Installation</DropListItem>
                  <DropListItem  onClick={() => { handleClick("Buildout"); handleDrop(); }}>Buildout</DropListItem>
                  <DropListItem onClick={() => { handleClick("Design"); handleDrop();}}>Design</DropListItem>
                  <DropListItem onClick={() => { handleClick("Special Event Planning"); handleDrop();}}>Event Planning</DropListItem>
                  <DropListItem onClick={() => { handleClick("Executive Producer"); handleDrop();}}>Executive Producer</DropListItem>
                  <DropListItem onClick={() => { handleClick("Media/Press"); handleDrop();}}>Media/Press</DropListItem>
                  <DropListItem onClick={() => { handleClick("Operations"); handleDrop();}}>Operations</DropListItem>
                  <DropListItem onClick={() => { handleClick("Staffing"); handleDrop();}}>Staffing</DropListItem>
                  <DropListItem onClick={() => { handleClick("Talent Wrangling"); handleDrop();}}>Talent Wrangling</DropListItem>
        </DropUl>
  </AnimatedDropDown>)}
                
              </NavItem>
              <NavItem>
                <NavLink2 to="about">ABOUT</NavLink2>
              </NavItem>
              <NavItem>
                <NavLink3 to="contact">CONTACT</NavLink3>
              </NavItem>
            </NavMenu>
          </Column4>
          <Column5 />
        </NavbarContainer>
      </Nav>
     
    </>
  );
};

export default Navbar;
